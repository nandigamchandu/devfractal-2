import { format } from 'date-fns'
import matchSorter from 'match-sorter'

export function formatDate(date: Date | undefined): string | undefined {
  return date && format(date, 'dd/MM/yyyy')
}

export function fuzzyTextFilterFn(
  rows: readonly any[],
  id: string,
  filterValue: string,
) {
  return matchSorter(rows, filterValue, {
    keys: [row => row.values[id]],
    threshold: matchSorter.rankings.WORD_STARTS_WITH,
  })
}

export function convert24To12(time: string) {
  // tslint:disable-next-line:prefer-const
  let tmpArr = time.split(':')
  let time12
  if (+tmpArr[0] === 12) {
    time12 = `${tmpArr[0]}:${tmpArr[1]} pm`
  } else {
    if (+tmpArr[0] === 0o0) {
      time12 = `12:${tmpArr[1]} am`
    } else {
      if (+tmpArr[0] > 12) {
        time12 = `${+tmpArr[0] - 12}:${tmpArr[1]} pm`
      } else {
        time12 = `${+tmpArr[0]}:${tmpArr[1]} am`
      }
    }
  }
  return time12
}
