// Debug configuration
export const DEBUG_MODE = import.meta.env.DEV || import.meta.env.VITE_DEBUG === 'true';

export interface DebugError {
  message: string;
  stack?: string;
  component?: string;
  timestamp: number;
}

class DebugManager {
  private errors: DebugError[] = [];
  private errorHandlers: ((error: DebugError) => void)[] = [];

  addError(error: DebugError) {
    this.errors.push(error);
    this.errorHandlers.forEach(handler => handler(error));
    
    if (DEBUG_MODE) {
      console.error('[DEBUG] Error caught:', error);
    } else {
      console.error('Error:', error.message);
    }
  }

  addErrorHandler(handler: (error: DebugError) => void) {
    this.errorHandlers.push(handler);
  }

  removeErrorHandler(handler: (error: DebugError) => void) {
    const index = this.errorHandlers.indexOf(handler);
    if (index > -1) {
      this.errorHandlers.splice(index, 1);
    }
  }

  getErrors() {
    return [...this.errors];
  }

  clearErrors() {
    this.errors = [];
  }
}

export const debugManager = new DebugManager();

// Global error handlers
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    debugManager.addError({
      message: event.message,
      stack: event.error?.stack,
      component: 'Global',
      timestamp: Date.now()
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    // Filter out WebSocket connection errors as they're handled gracefully
    const reasonStr = String(event.reason);
    const isWebSocketError = reasonStr.includes('WebSocket') || 
                            reasonStr.includes('SyntaxError: The string did not match the expected pattern') ||
                            reasonStr.includes('Connection failed');
    
    if (!isWebSocketError) {
      debugManager.addError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        component: 'Promise',
        timestamp: Date.now()
      });
    } else {
      // Just log WebSocket errors without showing debug modal
      console.warn('WebSocket connection issue (handled gracefully):', event.reason);
    }
  });
}

export function catchError(error: Error, component?: string) {
  debugManager.addError({
    message: error.message,
    stack: error.stack,
    component,
    timestamp: Date.now()
  });
}