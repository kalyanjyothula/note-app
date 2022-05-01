import React from "react";

export default function Base({ children, width, height, style, ...props }) {
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={height}
      width={width}
      {...props}
      style={style}
    >
      {children}
    </svg>
  );
}
