import React, { useState } from "react";
interface RatingsProps {
  userRating: number | undefined;
  setRating: (index: number) => void;
}
const Ratings: React.FC<RatingsProps> = ({ userRating, setRating }) => {
  const [temp, setTemp] = useState<number | undefined>(undefined);
  function fun(index: number) {
    setRating(index);
    setTemp(index);
  }
  return (
    <ul className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Stars
          key={i + 1}
          onClick={() => fun(i + 1)}
          onMouseEnter={() => setTemp(i + 1)}
          onMouseLeave={() => {
            setTemp(0);
          }}
          fill={temp ? temp >= i + 1 : userRating >= i + 1}
        />
      ))}
    </ul>
  );
};
interface StarsProps {
  onClick: () => void;
  fill: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
const Stars: React.FC<StarsProps> = ({
  onClick,
  fill,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <>
      {fill ? (
        <span>
          <svg
            className="star"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#ffd43b"
            stroke="#ffd43b"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>
      ) : (
        <span
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <svg
            className="star"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffd43b"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </span>
      )}
    </>
  );
};

export default Ratings;
