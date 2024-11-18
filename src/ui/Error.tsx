import React from "react";

interface ErrorProps {
  error: string;
}
export const Error: React.FC<ErrorProps> = ({ error }) => {
  return <div className="error">{error} 💥</div>;
};
