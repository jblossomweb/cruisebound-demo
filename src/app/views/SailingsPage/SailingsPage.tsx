import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import type Sailing from 'app/types/Sailing'
import useFilters from 'app/hooks/useFilters'

import FoldingColumn from 'app/templates/FoldingColumn'
import SailingFilters from 'app/components/molecules/SailingFilters'
import SailingList from 'app/components/organisms/SailingList'

import styles from './SailingsPage.module.css'

export interface SailingsPageProps {
  sailings: Sailing[]
  error?: Error | null
}

const SailingsPage: NextPage<SailingsPageProps> = ({
  sailings = [],
  error = undefined,
}: SailingsPageProps) => {
  const withIds = sailings
    // assign sequential ids to full list for the key prop
    .map((sailing, i) => ({
      id: i,
      ...sailing,
    }))

  const {
    portOptions,
    cruiselineOptions,
    filterPort,
    filterCruiseline,
    setFilterCruiseline,
    setFilterPort,
    resetFilters,
    filtering,
    isFiltered,
    filteredResult,
  } = useFilters(withIds)

  return (
    <div className={styles.container}>
      <Head>
        <title>Cruisebound Demo - Sailings</title>
        <meta
          name="description"
          content="Sail away, sail away sail away sail away"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FoldingColumn
        leftContent={
          <SailingFilters
            portOptions={portOptions}
            cruiselineOptions={cruiselineOptions}
            selectedPort={filterPort}
            selectedCruiseline={filterCruiseline}
            onPortChange={setFilterPort}
            onCruiselineChange={setFilterCruiseline}
          />
        }
        rightContent={
          <SailingList
            filtering={filtering}
            sailings={filteredResult}
            error={error || undefined}
            showReset={isFiltered}
            onReset={resetFilters}
          />
        }
      />
    </div>
  )
}

export default SailingsPage
