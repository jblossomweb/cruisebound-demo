import React from 'react'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'

export interface ImageProps extends Partial<NextImageProps> {
  alt: string
  src?: string
  width?: number
  height?: number
  className?: React.HTMLAttributes<HTMLElement>['className']
}

const Image: React.FC<ImageProps> = ({
  alt,
  src = undefined,
  width = undefined,
  height = undefined,
  className = '',
  ...otherProps
}) => (
  <figure className={className}>
    {!!src && (
      <NextImage
        alt={alt}
        title={alt}
        aria-label={alt}
        src={src}
        width={width}
        height={height}
        {...otherProps}
      />
    )}
  </figure>
)

export default Image
