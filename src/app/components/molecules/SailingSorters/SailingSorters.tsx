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
          value: 'rating-asc',
          display: 'Rating (lowest first)',
        },
        {
          value: 'price',
          display: 'Price (lowest first)',
        },
        {
          value: 'price-desc',
          display: 'Price (highest first)',
        },
        {
          value: 'duration',
          display: 'Duration (longest first)',
        },
        {
          value: 'duration-asc',
          display: 'Duration (shortest first)',
        },
        {
          value: 'departure',
          display: 'Departure Date (earliest first)',
        },
        {
          value: 'departure-desc',
          display: 'Departure Date (latest first)',
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
