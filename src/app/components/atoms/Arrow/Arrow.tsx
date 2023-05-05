/* eslint-disable react/self-closing-comp */
import React from 'react'

export interface ArrowProps {
  color?: React.CSSProperties['color']
  size?: number
}

const Arrow: React.FC<ArrowProps> = ({ color = '#0066FF', size = 9 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 4.5L8.5 4.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M4.75 0.750001L8.5 4.5L4.75 8.25"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
)

export default Arrow
