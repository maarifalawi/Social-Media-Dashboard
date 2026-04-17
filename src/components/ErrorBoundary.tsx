import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("[ErrorBoundary]", error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div
          role="alert"
          className="min-h-screen flex items-center justify-center p-6 bg-background"
        >
          <div className="max-w-md w-full text-center space-y-4">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-destructive" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Terjadi Kesalahan</h1>
            <p className="text-muted-foreground text-sm">
              Maaf, terjadi error yang tidak terduga. Silakan coba lagi atau muat ulang halaman.
            </p>
            {this.state.error?.message && (
              <pre className="text-xs text-left bg-muted p-3 rounded overflow-auto max-h-40">
                {this.state.error.message}
              </pre>
            )}
            <div className="flex gap-2 justify-center">
              <Button variant="outline" onClick={this.handleReset}>
                Coba Lagi
              </Button>
              <Button onClick={this.handleReload}>Muat Ulang</Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
