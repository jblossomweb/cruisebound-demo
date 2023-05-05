import React from 'react'
import ReactPaginate from 'react-paginate'
import classNames from 'classnames'

import type Sailing from 'app/types/Sailing'
import useSort from 'app/hooks/useSort'
import usePagination from 'app/hooks/usePagination'
import Arrow from 'app/components/atoms/Arrow'
import Button from 'app/components/atoms/Button'
import Spinner from 'app/components/atoms/Spinner'
import SailingCard from 'app/components/molecules/SailingCard'
import SailingSorters from 'app/components/molecules/SailingSorters'

import styles from './SailingList.module.css'

export interface SailingListProps {
  sailings: Sailing[]
  filtering?: boolean
  error?: Error
  showReset?: boolean
  onReset?: () => void
}

const SailingList: React.FC<SailingListProps> = ({
  sailings,
  filtering = false,
  error = undefined,
  showReset = false,
  onReset = undefined,
}) => {
  const { sorting, sorted, sortBy, setSortBy } = useSort(sailings)
  const { currentItems, pageCount, handlePageClick } = usePagination(
    sorted,
    sortBy,
    3
  )

  return (
    <main className={styles.main}>
      {!!error && <div className={styles.error}>{error.message}</div>}
      <div className={styles.sort}>
        <SailingSorters sortValue={sortBy} onSort={setSortBy} />
      </div>

      {sorting || filtering ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.heading}>
            <div className={styles.count}>{sailings.length} trips found</div>
            {showReset && (
              <div className={styles.reset}>
                <Button
                  text="Reset filters"
                  color="white"
                  size="tiny"
                  shadow
                  onClick={onReset}
                />
              </div>
            )}
          </div>
          <div className={styles.sailings}>
            {currentItems?.map((sailing) => (
              <SailingCard key={sailing.id} sailing={sailing} />
            ))}
          </div>
          <ReactPaginate
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            nextLabel={<Arrow color="#fff" size={12} />}
            previousLabel={<Arrow color="#fff" size={12} />}
            pageClassName={styles['page-item']}
            pageLinkClassName={styles['page-link']}
            previousClassName={classNames(
              styles['page-item'],
              styles['page-ctrl'],
              styles['page-prev']
            )}
            previousLinkClassName={styles['page-link']}
            nextClassName={classNames(
              styles['page-item'],
              styles['page-ctrl'],
              styles['page-next']
            )}
            nextLinkClassName={styles['page-link']}
            breakLabel="..."
            breakClassName={styles['page-item']}
            breakLinkClassName={styles['page-link']}
            containerClassName={styles.pagination}
            activeClassName={styles['page-active']}
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </main>
  )
}

export default SailingList
