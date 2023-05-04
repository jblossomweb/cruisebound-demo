import displayDateRange from './displayDateRange'

describe('utils/displayDateRange', () => {
  it('should format a date range correctly when in same month of same year', () => {
    const result = displayDateRange('2021-09-01', '2021-09-04')
    expect(result).toEqual('Sept 1-4, 2021')
  })

  it('should format a date range correctly when in different months of same year', () => {
    const result = displayDateRange('2021-09-27', '2021-10-04')
    expect(result).toEqual('Sept 27-Oct 4, 2021')
  })

  it('should format a date range correctly when in different months and different years', () => {
    const result = displayDateRange('2021-12-27', '2022-01-02')
    expect(result).toEqual('Dec 27, 2021-Jan 2, 2022')
  })
})
