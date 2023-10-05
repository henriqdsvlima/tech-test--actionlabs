
export interface IExchangeRate {
  date: string
  open: string
  close: string
  high: string
  low: string
}

export type IExchangeRateOverview = Partial<IExchangeRate>
