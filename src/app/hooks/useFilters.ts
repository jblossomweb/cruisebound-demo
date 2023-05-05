import { useEffect, useState } from 'react'

import type Sailing from 'app/types/Sailing'
import getUniqueDeparturePorts from 'app/utils/getUniqueDeparturePorts'
import getUniqueCruiselines from 'app/utils/getUniqueCruiselines'
import filterByCruiseline from 'app/utils/filterByCruiseline'
import filterByDeparturePort from 'app/utils/filterByDeparturePort'

const useFilters = (sailings: Sailing[]) => {
  const [filterPort, setFilterPort] = useState('any')
  const [filterCruiseline, setFilterCruiseline] = useState('any')
  const [filtering, setFiltering] = useState(false)

  useEffect(() => {
    setFiltering(true)
  }, [filterPort, filterCruiseline])

  useEffect(() => {
    if (filtering) {
      setTimeout(() => {
        setFiltering(false)
      }, 1) // arbitrary, to account for render delay
    }
  }, [filtering])

  const filteredByCruiseline = filterByCruiseline(sailings, filterCruiseline)
  const filteredByPort = filterByDeparturePort(sailings, filterPort)

  const portOptions = [
    { display: 'Any port', value: 'any' },
    ...getUniqueDeparturePorts(filteredByCruiseline).map((port) => ({
      display: port,
      value: port,
    })),
  ]

  const cruiselineOptions = [
    { display: 'Any ship', value: 'any' },
    ...getUniqueCruiselines(filteredByPort).map((line) => ({
      display: line,
      value: line,
    })),
  ]

  const filteredResult = sailings.filter(
    (sailing) =>
      filteredByCruiseline.includes(sailing) && filteredByPort.includes(sailing)
  )

  const resetFilters = () => {
    setFilterCruiseline('any')
    setFilterPort('any')
  }

  const isFiltered = filterPort !== 'any' || filterCruiseline !== 'any'

  return {
    portOptions,
    cruiselineOptions,
    filterPort,
    filterCruiseline,
    setFilterPort,
    setFilterCruiseline,
    resetFilters,
    filtering,
    isFiltered,
    filteredResult,
  }
}

export default useFilters
