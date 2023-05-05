import React from 'react'

import type SortValue from 'app/types/SortValue'
import Dropdown from 'app/components/atoms/Dropdown'
import styles from './SailingSorters.module.css'

export interface SailingSortersProps {
  sortValue?: SortValue
  // eslint-disable-next-line no-unused-vars
  onSort: (value: SortValue) => void
}

const SailingSorters: React.FC<SailingSortersProps> = ({
  sortValue = undefined,
  onSort,
}) => (
  <div className={styles.sorters}>
    <Dropdown
      label="Sort by"
      value={sortValue}
      options={[
        {
          value: 'rating',
          display: 'Rating (highest first)',
        },
        {
          value: 'price',
          display: 'Price (lowest first)',
        },
        {
          value: 'duration',
          display: 'Duration (longest first)',
        },
      ]}
      onSelect={(value: string) => {
        onSort(value as SortValue)
      }}
      shadow
    />
  </div>
)

export default SailingSorters
