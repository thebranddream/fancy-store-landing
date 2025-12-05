/**
 * Toast Component
 * Displays notification messages with auto-dismiss
 */

import { useUIStore, Toast as ToastType } from '@/store/uiStore';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

const toastStyles = {
  success: 'border-green-500/30 bg-green-500/10',
  error: 'border-destructive/30 bg-destructive/10',
  info: 'border-primary/30 bg-primary/10',
};

const ToastItem = ({ toast }: { toast: ToastType }) => {
  const { removeToast } = useUIStore();
  const Icon = toastIcons[toast.type];

  return (
    <div
      role={toast.type === 'error' ? 'alert' : 'status'}
      className={cn(
        'flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur-md animate-slide-in-right',
        toastStyles[toast.type]
      )}
    >
      <Icon className="w-5 h-5 text-foreground shrink-0" />
      <p className="text-sm text-foreground flex-1">{toast.message}</p>
      <button
        onClick={() => removeToast(toast.id)}
        className="p-1 rounded-md hover:bg-white/10 transition-colors"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>
  );
};

export const ToastContainer = () => {
  const { toasts } = useUIStore();

  if (toasts.length === 0) return null;

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full sm:bottom-6 sm:right-6"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};
