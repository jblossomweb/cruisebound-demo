import React from 'react'
import classNames from 'classnames'

import styles from './Button.module.css'

export interface ButtonProps {
  text: string | React.ReactNode
  color?: 'blue' | 'red' | 'green' | 'slate' | 'white'
  size?: 'tiny' | 'small' | 'medium' | 'large'
  shadow?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  text = '',
  color = 'blue',
  size = 'medium',
  shadow = false,
  onClick = undefined,
}) => (
  <button
    type="button"
    className={classNames(
      styles.btn,
      styles[`btn-${color}`],
      styles[`btn-${size}`],
      { [styles['btn-shadow']]: shadow }
    )}
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button
