import { IntFromString } from 'io-ts-types/lib/IntFromString'
import { stringify } from 'query-string'
import React from 'react'
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
  useHistory,
  useLocation,
} from 'technoidentity-devfractal'
import { opt } from 'technoidentity-utils'
import { useQuery } from './useQuery'

interface PagerViewProps {
  readonly page: number
  onPageChange(n: number): void
}

export const PagerView: React.FC<PagerViewProps> = ({ page, onPageChange }) => (
  <Pagination alignment="centered">
    <PaginationPrevious
      onClick={() => {
        onPageChange(page + 1)
      }}
    >
      Previous
    </PaginationPrevious>

    <PaginationNext
      onClick={() => {
        onPageChange(page + 1)
      }}
    >
      Next
    </PaginationNext>

    {/* <PaginationList>
      <PaginationLink current aria-label="Goto page 1">
        1
      </PaginationLink>
      <PaginationEllipsis>&hellip</PaginationEllipsis>
      <PaginationLink aria-label="Goto page 11">11</PaginationLink>
      <PaginationLink aria-label="Page 12">12</PaginationLink>

      <PaginationEllipsis />
      <PaginationLink aria-label="Goto page 20">20</PaginationLink>
    </PaginationList> */}
  </Pagination>
)

export const RoutedPager: React.FC = () => {
  const { pathname } = useLocation()
  const { push } = useHistory()

  const query = useQuery(opt({ page: IntFromString }))

  const page = query.page ? query.page : 1

  return (
    <PagerView
      page={page}
      onPageChange={page => {
        push(`${pathname}?${stringify({ ...query, page })}`)
      }}
    />
  )
}
