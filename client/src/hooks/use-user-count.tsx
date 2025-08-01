import { useState, useEffect, useRef } from 'react';

interface UserCountData {
  activeUsers: number;
  totalUsers: number;
}

export function useUserCount() {
  const [userCount, setUserCount] = useState<UserCountData>({ activeUsers: 0, totalUsers: 0 });
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const sendVisibilityStatus = (isVisible: boolean) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      try {
        wsRef.current.send(JSON.stringify({
          type: 'visibility',
          isVisible: Boolean(isVisible)
        }));
      } catch (error) {
        console.error('Failed to send WebSocket message:', error);
      }
    }
  };

  const connect = () => {
    try {
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const wsUrl = `${protocol}//${window.location.host}/ws`;
      const ws = new WebSocket(wsUrl);
      
      ws.onopen = () => {
        console.log('WebSocket connected');
        setIsConnected(true);
        
        // Send initial visibility status
        sendVisibilityStatus(!document.hidden);
        
        // Clear any pending reconnection
        if (reconnectTimeoutRef.current) {
          clearTimeout(reconnectTimeoutRef.current);
          reconnectTimeoutRef.current = null;
        }
      };
      
      ws.onmessage = (event) => {
        try {
          // More robust message validation
          if (typeof event.data !== 'string') {
            console.warn('WebSocket received non-string data:', typeof event.data);
            return;
          }
          
          const data = JSON.parse(event.data);
          
          if (data && typeof data === 'object' && data.type === 'userCount') {
            const activeUsers = parseInt(data.activeUsers) || 0;
            const totalUsers = parseInt(data.totalUsers) || 0;
            
            setUserCount({
              activeUsers: Math.max(0, activeUsers),
              totalUsers: Math.max(0, totalUsers)
            });
          }
        } catch (error) {
          console.warn('WebSocket message parse error (non-critical):', error);
        }
      };
      
      ws.onclose = () => {
        console.log('WebSocket disconnected');
        setIsConnected(false);
        
        // Attempt to reconnect after 3 seconds
        reconnectTimeoutRef.current = setTimeout(() => {
          connect();
        }, 3000);
      };
      
      ws.onerror = (error) => {
        console.warn('WebSocket connection issue (will retry):', error);
        setIsConnected(false);
      };
      
      wsRef.current = ws;
    } catch (error) {
      console.warn('WebSocket connection failed (will retry):', error);
      setIsConnected(false);
    }
  };

  useEffect(() => {
    // Initial connection
    connect();
    
    // Page Visibility API - track when user switches tabs
    const handleVisibilityChange = () => {
      sendVisibilityStatus(!document.hidden);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Also track focus/blur events for additional reliability
    const handleFocus = () => sendVisibilityStatus(true);
    const handleBlur = () => sendVisibilityStatus(false);
    
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);
    
    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
      
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  return {
    userCount,
    isConnected
  };
}