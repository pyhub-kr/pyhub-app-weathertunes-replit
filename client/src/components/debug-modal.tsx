import { useState, useEffect } from "react";
import { debugManager, DEBUG_MODE, type DebugError } from "@/lib/debug";

export function DebugModal() {
  const [errors, setErrors] = useState<DebugError[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!DEBUG_MODE) return;

    const handleError = (error: DebugError) => {
      setErrors(prev => [...prev, error]);
      setIsVisible(true);
    };

    debugManager.addErrorHandler(handleError);
    
    return () => {
      debugManager.removeErrorHandler(handleError);
    };
  }, []);

  if (!DEBUG_MODE || !isVisible || errors.length === 0) {
    return null;
  }

  const latestError = errors[errors.length - 1];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
      <div className="bg-red-900 text-white p-6 rounded-lg max-w-2xl mx-4 max-h-[80vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">🐛 DEBUG MODE - 오류 발생</h2>
          <div className="flex space-x-2">
            <button 
              className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded text-sm"
              onClick={() => {
                debugManager.clearErrors();
                setErrors([]);
                setIsVisible(false);
              }}
            >
              Clear All
            </button>
            <button 
              className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm"
              onClick={() => setIsVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
        
        <div className="mb-4 p-3 bg-black bg-opacity-50 rounded">
          <div className="text-yellow-300 text-sm mb-2">
            총 {errors.length}개 오류 • 최신: {new Date(latestError.timestamp).toLocaleTimeString()}
          </div>
          <div className="text-red-300 font-medium mb-2">
            {latestError.component && `[${latestError.component}] `}
            {latestError.message}
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">Stack Trace:</h3>
            <pre className="bg-black bg-opacity-50 p-3 rounded text-xs overflow-auto max-h-40">
              {latestError.stack || 'No stack trace available'}
            </pre>
          </div>

          {errors.length > 1 && (
            <div>
              <h3 className="font-medium mb-2">Previous Errors ({errors.length - 1}):</h3>
              <div className="bg-black bg-opacity-50 p-3 rounded text-xs max-h-32 overflow-auto">
                {errors.slice(0, -1).map((error, index) => (
                  <div key={index} className="mb-2 pb-2 border-b border-gray-600 last:border-b-0">
                    <div className="text-yellow-300">
                      {new Date(error.timestamp).toLocaleTimeString()}
                      {error.component && ` [${error.component}]`}
                    </div>
                    <div className="text-red-300">{error.message}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 flex space-x-2">
          <button 
            className="bg-red-700 hover:bg-red-600 px-4 py-2 rounded"
            onClick={() => window.location.reload()}
          >
            페이지 새로고침
          </button>
          <button 
            className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded"
            onClick={() => {
              console.log('Debug info:', {
                errors,
                userAgent: navigator.userAgent,
                url: window.location.href,
                timestamp: new Date().toISOString()
              });
              alert('Debug 정보가 콘솔에 출력되었습니다.');
            }}
          >
            Debug 정보 출력
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-300">
          DEBUG MODE가 활성화되어 있습니다. 프로덕션에서는 이 모달이 표시되지 않습니다.
        </div>
      </div>
    </div>
  );
}