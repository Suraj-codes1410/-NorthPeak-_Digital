import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Button } from './Button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error inside ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
          <SectionWrapper id="error-fallback" className="py-0 text-center max-w-xl">
            <div className="space-y-6">
              <span className="font-mono text-[9px] font-semibold text-gold uppercase tracking-widest">
                System Error
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-primary leading-tight">
                Something went wrong.
              </h1>
              <p className="font-sans text-xs md:text-sm text-secondary leading-relaxed max-w-md mx-auto">
                An unexpected exception has occurred in the application view rendering layer. This
                digital experience has degraded gracefully to prevent page crashes.
              </p>
              {this.state.error && (
                <pre className="p-4 bg-surface border border-border/60 rounded-lg text-left overflow-auto font-mono text-[10px] text-red-600/90 max-h-40">
                  {this.state.error.toString()}
                </pre>
              )}
              <div className="pt-4">
                <Button variant="primary" onClick={this.handleReload}>
                  Reload Application
                </Button>
              </div>
            </div>
          </SectionWrapper>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
