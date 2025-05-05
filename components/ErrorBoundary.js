'use client';
import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-900/20 rounded-md my-4">
          <h3 className="text-red-500 font-medium mb-2">Something went wrong</h3>
          <p className="text-gray-300 mb-4">{this.state.error?.message || 'Unknown error'}</p>
          <button
            onClick={this.handleRetry}
            className="px-4 py-2 bg-[#3D3D3D] text-white rounded-md hover:bg-[#4D4D4D]"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}