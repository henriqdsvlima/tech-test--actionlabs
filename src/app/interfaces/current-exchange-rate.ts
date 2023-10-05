export interface ICurrentExchangeRate {
  exchangeRate: string
  fromSymbol: string
  lastUpdateAt: string
  rateLimitExceeded: string
  success: string
  toSymbol: string
}

export type ICurrentExchangeRateOverview = Partial<ICurrentExchangeRate>
