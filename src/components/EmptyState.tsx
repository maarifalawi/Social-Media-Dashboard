import { ReactNode } from "react";
import { Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: { label: string; onClick: () => void };
}

export const EmptyState = ({ title, description, icon, action }: EmptyStateProps) => (
  <div
    role="status"
    className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-3"
  >
    <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
      {icon || <Inbox className="h-7 w-7" aria-hidden="true" />}
    </div>
    <h3 className="text-base font-semibold text-foreground">{title}</h3>
    {description && (
      <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
    )}
    {action && (
      <Button onClick={action.onClick} size="sm" className="mt-2">
        {action.label}
      </Button>
    )}
  </div>
);
