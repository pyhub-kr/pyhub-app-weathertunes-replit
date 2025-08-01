import React from 'react';
import { catchError, DEBUG_MODE } from '@/lib/debug';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    catchError(error, 'ErrorBoundary');
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (DEBUG_MODE) {
      console.error('[DEBUG] Error caught by boundary:', error, errorInfo);
    } else {
      console.error('Error caught by boundary:', error.message);
    }
    
    catchError(error, 'ErrorBoundary');
  }

  render() {
    if (this.state.hasError) {
      // DEBUG 모드에서는 DebugModal이 처리하므로 단순한 fallback만 표시
      if (DEBUG_MODE) {
        return this.props.fallback || (
          <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Component Error</h2>
              <p className="text-gray-600">DEBUG 모드에서 오류가 감지되었습니다.</p>
              <p className="text-sm text-gray-500 mt-2">오류 상세 정보는 Debug Modal에서 확인하세요.</p>
            </div>
          </div>
        );
      }

      // 프로덕션 모드에서는 간단한 오류 화면
      return this.props.fallback || (
        <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center max-w-md mx-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">일시적인 문제가 발생했습니다</h2>
            <p className="text-gray-600 mb-4">앱을 새로고침하면 문제가 해결될 수 있습니다.</p>
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
              onClick={() => window.location.reload()}
            >
              페이지 새로고침
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}