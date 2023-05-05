import React from 'react'
import classNames from 'classnames'

import type SelectOption from 'app/types/SelectOption'
import styles from './Dropdown.module.css'

export interface DropdownProps {
  label?: string
  value?: SelectOption['value']
  options: SelectOption[]
  wide?: boolean
  naked?: boolean
  shadow?: boolean
  // eslint-disable-next-line no-unused-vars
  onSelect: (value: SelectOption['value']) => void
}

const Dropdown: React.FC<DropdownProps> = ({
  label = undefined,
  value = undefined,
  options,
  wide = false,
  naked = false,
  shadow = false,
  onSelect,
}) => (
  <>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    {!!label && <label className={styles.label}>{label}</label>}
    <div
      className={classNames(styles.select, {
        [styles.wide]: wide,
        [styles.naked]: naked,
        [styles.shadow]: shadow,
      })}
    >
      <select
        data-testid="select"
        className={styles.inner}
        value={value}
        onChange={(e) => {
          onSelect(e.target.value)
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.display}
          </option>
        ))}
      </select>
    </div>
  </>
)

export default Dropdown
