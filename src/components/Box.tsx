import React, { useState } from "react";

interface BoxProps {
  children: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ children }) => {
  const [isOpen1, setIsOpen1] = useState<boolean>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && children}
    </div>
  );
};
