import React from 'react'

import type SelectOption from 'app/types/SelectOption'
import Dropdown from 'app/components/atoms/Dropdown'

import styles from './SailingFilters.module.css'

export interface SailingFiltersProps {
  portOptions: SelectOption[]
  cruiselineOptions: SelectOption[]
  selectedPort?: SelectOption['value']
  selectedCruiseline?: SelectOption['value']
  // eslint-disable-next-line no-unused-vars
  onPortChange: (port: string) => void
  // eslint-disable-next-line no-unused-vars
  onCruiselineChange: (line: string) => void
}

const SailingFilters: React.FC<SailingFiltersProps> = ({
  portOptions,
  cruiselineOptions,
  selectedPort = undefined,
  selectedCruiseline = undefined,
  onPortChange,
  onCruiselineChange,
}) => (
  <div className={styles.filters}>
    <div className={styles.filter}>
      <Dropdown
        label="Departure port"
        options={portOptions}
        value={selectedPort}
        onSelect={onPortChange}
        wide
        naked
      />
    </div>
    <div className={styles.filter}>
      <Dropdown
        label="Cruiseline"
        options={cruiselineOptions}
        value={selectedCruiseline}
        onSelect={onCruiselineChange}
        wide
        naked
      />
    </div>
  </div>
)

export default SailingFilters
