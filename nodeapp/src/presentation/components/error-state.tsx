import type { ReactNode } from "react";

type ErrorStateProps = {
  title?: string;
  message: string;
  action?: ReactNode;
};

export default function ErrorState({
  title = "Something went wrong",
  message,
  action,
}: ErrorStateProps) {
  return (
    <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-900">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-rose-800">{message}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}