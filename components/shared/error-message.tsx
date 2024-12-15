interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;
  
  return (
    <p className="text-sm font-medium text-destructive mt-1">
      {message}
    </p>
  );
}