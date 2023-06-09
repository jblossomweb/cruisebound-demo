import { useEffect, useState } from 'react'

import type Sailing from 'app/types/Sailing'
import type SortValue from 'app/types/SortValue'

import sortByDuration from 'app/utils/sortByDuration'
import sortByPrice from 'app/utils/sortByPrice'
import sortByRating from 'app/utils/sortByRating'
import sortByDepartureDate from 'app/utils/sortByDepartureDate'

const useSort = (sailings: Sailing[]) => {
  const [sortBy, setSortBy] = useState<SortValue>('rating')
  const [sorting, setSorting] = useState(false)

  useEffect(() => {
    setSorting(true)
  }, [sortBy])

  useEffect(() => {
    if (sorting) {
      setTimeout(() => {
        setSorting(false)
      }, 1) // arbitrary, to account for render delay
    }
  }, [sorting])

  let sorted = sailings

  switch (sortBy) {
    case 'price':
      sorted = sortByPrice(sailings, 'ASC')
      break
    case 'price-desc':
      sorted = sortByPrice(sailings, 'DESC')
      break
    case 'duration':
      sorted = sortByDuration(sailings, 'DESC')
      break
    case 'duration-asc':
      sorted = sortByDuration(sailings, 'ASC')
      break
    case 'departure':
      sorted = sortByDepartureDate(sailings, 'ASC')
      break
    case 'departure-desc':
      sorted = sortByDepartureDate(sailings, 'DESC')
      break
    case 'rating-asc':
      sorted = sortByRating(sailings, 'ASC')
      break
    case 'rating':
    default:
      sorted = sortByRating(sailings, 'DESC')
  }

  return {
    sorting,
    sorted,
    sortBy,
    setSortBy,
  }
}

export default useSort
