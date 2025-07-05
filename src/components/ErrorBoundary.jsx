import React from "react";
//ChatGPT CODe:
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Update state when a child throws
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // (Optional) Log the error to an external service
  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // sendErrorLog({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white p-4">
          <div className="max-w-md text-center">
            <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
            <p className="mb-6">
              An unexpected error occurred. Our team has been notified.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    // When there's no error, render children as normal
    return this.props.children;
  }
}

export default ErrorBoundary;