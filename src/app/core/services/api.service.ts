
// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ApiResponse, ApiListResponse } from '../responses/api.models';
import { environment } from '../environment/environment';
import { ApiError, ApiErrorType } from '../responses/api-error';
import { ICurrentExchangeRateOverview } from 'src/app/interfaces/current-exchange-rate';
import { IDailyExchangeRate, IDailyExchangeRateOverview } from 'src/app/interfaces/exchange-rate';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Base URL for the API. Update this as per your API endpoint.
  private baseUrl_current = environment.CURRENT_RATE_EXCHANGE_API_URL;
  private baseUrl_daily = environment.DAILY_RATE_EXCHANGE_API_URL;



  constructor(private http: HttpClient) { }

  // Get one item by ID
  // getCurrentRateExchange(fromSymbol: string | undefined, toSymbol: string | undefined): Observable<ApiResponse<ICurrentExchangeRateOverview>> {

  //   let httpParams = new HttpParams()
  //     .set('from_symbol', fromSymbol ? fromSymbol : '')
  //     .set('to_symbol', toSymbol ? toSymbol : '');;
  //   // URL structuring

  //   return this.http.get<ApiResponse<ICurrentExchangeRateOverview>>(this.baseUrl_current, { params: httpParams }).pipe(

  //     catchError(this.handleError))
  // }

  // // Get a list of items
  // getDailyRateExchange(fromSymbol: string | undefined, toSymbol: string | undefined): Observable<ApiListResponse<IDailyExchangeRateOverview>> {

  //   let httpParams = new HttpParams()
  //     .set('from_symbol', fromSymbol ? fromSymbol : '')
  //     .set('to_symbol', toSymbol ? toSymbol : '')

  //   return this.http.get<ApiListResponse<IDailyExchangeRateOverview>>(this.baseUrl_daily, { params: httpParams }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  getCurrentExchangeRate(fromSymbol: string, toSymbol: string): Observable<any> {
    // Crie um objeto HttpParams e adicione os parâmetros na ordem desejada
    let httpParams = new HttpParams()
      .set('apiKey', 'RVZG0GHEV2KORLNA')
      .set('from_symbol', fromSymbol)
      .set('to_symbol', toSymbol);

    const url = `${environment.CURRENT_RATE_EXCHANGE_API_URL}?${httpParams.toString()}`;

    return this.http.get(url);
  }

  getDailyExchangeRateLast30Days(
    fromSymbol: string,
    toSymbol: string
  ): Observable<ApiResponse<IDailyExchangeRateOverview[]>> {
    const currentDate = new Date();
    console.log(currentDate)
    const thirtyDaysAgo = new Date();
    console.log(thirtyDaysAgo)
    thirtyDaysAgo.setDate(currentDate.getDate() - 30);

    const httpParams = new HttpParams()

      .set('apiKey', 'RVZG0GHEV2KORLNA')
      .set('from_symbol', fromSymbol)
      .set('to_symbol', toSymbol)
      .set('lastUpdatedAt', "2023-10-06T13:55:00.000+00:00")
    console.log(httpParams)
    return this.http
      .get<ApiResponse<IDailyExchangeRateOverview[]>>(
        environment.DAILY_RATE_EXCHANGE_API_URL,
        { params: httpParams }
      )
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    let apiError: ApiError;

    // Se o erro for uma resposta HTTP
    if (error.error instanceof Object) {
      apiError = error.error as ApiError;
    } else {
      apiError = {
        type: ApiErrorType.err1 || ApiErrorType.err2 || ApiErrorType.err3,
        message: 'Something went wrong. Please try again later.',
      }
        ;
    }

    return new Observable((observer) => {
      observer.error(apiError);
    });
  }
}
