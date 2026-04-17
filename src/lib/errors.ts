import { toast } from "sonner";

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  if (error && typeof error === "object" && "message" in error) {
    return String((error as { message: unknown }).message);
  }
  try {
    return JSON.stringify(error);
  } catch {
    return "Terjadi kesalahan tidak dikenal";
  }
}

export function logAndToast(context: string, error: unknown, fallback?: string): void {
  const msg = getErrorMessage(error);
  console.error(`[${context}]`, error);
  toast.error(fallback ? `${fallback}: ${msg}` : msg);
}
