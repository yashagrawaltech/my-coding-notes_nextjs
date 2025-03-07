'use client';

interface ErrorPageProps {
  error: Error;
}

export const ErrorComponent = ({ error }: ErrorPageProps) => {
  return <span className="text-red-400">{error.message}</span>;
};

export default ErrorComponent;
