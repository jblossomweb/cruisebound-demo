import React from 'react'
import NextImage from 'next/image'

export interface Props {
  alt: string
  src: string
  width: number
  height: number
  className?: React.HTMLAttributes<HTMLElement>['className']
}

const Image: React.FC<Props> = ({
  alt,
  src,
  width,
  height,
  className = '',
}) => (
  <figure className={className}>
    <NextImage
      alt={alt}
      title={alt}
      aria-label={alt}
      src={src}
      width={width}
      height={height}
    />
  </figure>
)

export default Image
