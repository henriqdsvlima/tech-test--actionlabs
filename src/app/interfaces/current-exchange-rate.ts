export interface ICurrentExchangeRate {
  exchangeRate: string
  fromSymbol: string
  lastUpdateAt: string
  success: string
  toSymbol: string
  closeDiff: string
}

export type ICurrentExchangeRateOverview = Partial<ICurrentExchangeRate>
