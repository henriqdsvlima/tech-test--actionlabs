
// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ApiResponse } from '../responses/api.models';
import { environment } from '../environment/environment';
import { ApiError, ApiErrorType } from '../responses/api-error';
import { IDailyExchangeRateOverview } from 'src/app/interfaces/exchange-rate';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }
  getCurrentExchangeRate(fromSymbol: string, toSymbol: string): Observable<any> {
    let httpParams = new HttpParams()
      .set('apiKey', 'RVZG0GHEV2KORLNA')
      .set('from_symbol', fromSymbol)
      .set('to_symbol', toSymbol);

    const url = `${environment.CURRENT_RATE_EXCHANGE_API_URL}?${httpParams.toString()}`;

    return this.http.get(url)
  }

  getDailyExchangeRateLast30Days(
    fromSymbol: string,
    toSymbol: string
  ): Observable<ApiResponse<IDailyExchangeRateOverview[]>> {
    const currentDate = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(currentDate.getDate() - 30);

    const httpParams = new HttpParams()
      .set('apiKey', 'RVZG0GHEV2KORLNA')
      .set('from_symbol', fromSymbol)
      .set('to_symbol', toSymbol);

    return this.http
      .get<ApiResponse<IDailyExchangeRateOverview[]>>(
        environment.DAILY_RATE_EXCHANGE_API_URL,
        { params: httpParams }
      )
      .pipe(
        map((response) => {
          // Filtrar os valores dos últimos 30 dias
          const filteredData = response.data.filter((item) => {
            const itemDate = item.date?.toString();

            if (itemDate) {
              const date = new Date(itemDate);
              return date >= thirtyDaysAgo && date <= currentDate;
            }

            return false;
          });

          // Atualizar a resposta com os valores filtrados
          return { ...response, data: filteredData };
        }),
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    let apiError: ApiError;

    if (error.status === 401) {
      apiError = {
        type: ApiErrorType.Unauthorized,
        message: 'Unauthorized. Please log in.',
      };
    } else if (error.status === 403) {
      apiError = {
        type: ApiErrorType.Forbidden,
        message: 'Forbidden. You do not have permission to access this resource.',
      };
    } else if (error.status === 404) {
      apiError = {
        type: ApiErrorType.NotFound,
        message: 'Not Found. The requested resource does not exist.',
      };
    } else if (error.error instanceof Object) {
      // Se o erro for uma resposta HTTP com um corpo JSON
      apiError = error.error as ApiError;
    } else {
      // Se o erro não se encaixar em nenhum caso específico
      apiError = {
        type: ApiErrorType.GenericError,
        message: 'Something went wrong. Please try again later.',
      };
    }

    return new Observable((observer) => {
      observer.error(apiError);
    });
  }
}
