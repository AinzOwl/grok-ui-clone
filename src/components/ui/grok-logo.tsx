import type React from "react";

interface GrokLogoProps {
  className?: string;
}

export const GrokLogo: React.FC<GrokLogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM26.5 16C26.5 21.799 21.799 26.5 16 26.5C10.201 26.5 5.5 21.799 5.5 16C5.5 10.201 10.201 5.5 16 5.5C21.799 5.5 26.5 10.201 26.5 16Z"
        fill="currentColor"
      />
      <path
        d="M13.1924 12.6058C13.7383 12.1842 14.0039 11.5144 13.9984 10.8046L13.9984 5.75L18.0016 5.75L18.0016 10.8046C17.9961 11.5144 18.2617 12.1842 18.8076 12.6058L22.5193 15.6057C23.0986 16.0506 23.4215 16.7511 23.3984 17.4817L23.3984 22.5H19.3984L19.3984 18.5C19.3984 17.3954 18.503 16.5 17.3984 16.5H14.6016C13.497 16.5 12.6016 17.3954 12.6016 18.5V22.5H8.60156L8.60156 17.4817C8.57851 16.7511 8.90139 16.0506 9.48069 15.6057L13.1924 12.6058Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};
