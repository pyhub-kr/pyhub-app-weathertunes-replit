import React from 'react';

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
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[10000]">
          <div className="bg-red-900 text-white p-6 rounded-lg max-w-lg mx-4">
            <h2 className="text-xl font-bold mb-4">앱 오류 발생</h2>
            <p className="mb-4">다음 오류가 발생했습니다:</p>
            <pre className="bg-black bg-opacity-50 p-3 rounded text-xs overflow-auto">
              {this.state.error?.message}
            </pre>
            <pre className="bg-black bg-opacity-50 p-3 rounded text-xs overflow-auto mt-2">
              {this.state.error?.stack}
            </pre>
            <button 
              className="mt-4 bg-red-700 hover:bg-red-600 px-4 py-2 rounded"
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