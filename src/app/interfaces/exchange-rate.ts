
export interface IDailyExchangeRate {
  date: string
  open: string
  close: string
  high: string
  low: string
  closeDiff: number
}

export type IDailyExchangeRateOverview = Partial<IDailyExchangeRate>
