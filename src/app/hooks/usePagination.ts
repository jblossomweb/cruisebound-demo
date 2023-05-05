import { useEffect, useState } from 'react'
import type Sailing from 'app/types/Sailing'

const usePagination = (
  items: Sailing[],
  sortBy: string,
  itemsPerPage: number
) => {
  const [currentItems, setCurrentItems] = useState<Sailing[] | null>(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    // go to first page if list changes
    setItemOffset(0)
  }, [items, sortBy])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [items, sortBy, itemOffset, itemsPerPage])

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return {
    currentItems,
    pageCount,
    handlePageClick,
  }
}

export default usePagination
