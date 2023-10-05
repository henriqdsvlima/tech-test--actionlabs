// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { ApiResponse, ApiListResponse } from '../responses/api.models';
import { environment } from '../environment/environment';
import { ApiError, ApiErrorType } from '../responses/api-error';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Base URL for the API. Update this as per your API endpoint.
  private baseUrl = environment.DAILY_RATE_EXCHANGE_API_URL;



  constructor(private http: HttpClient) { }

  // Get one item by ID
  getCurrentRateExchange<T>(fromSymbol: string, toSymbol: string | undefined): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}${fromSymbol}/${toSymbol}`).pipe(
      map((data) => data),
      catchError(this.handleError)
    )
  }

  // Get a list of items
  getDailyRateExchange<T>(endpoint: string): Observable<ApiListResponse<T>> {
    return this.http.get<ApiListResponse<T>>(`${this.baseUrl}${endpoint}`);
  }



  private handleError(error: HttpErrorResponse): Observable<never> {
    let apiError: ApiError;

    // Se o erro for uma resposta HTTP
    if (error.error instanceof Object) {
      apiError = error.error as ApiError;
    } else {
      apiError = {
        type: ApiErrorType.err1,
        message: 'Something went wrong. Please try again later.',
      };
    }

    return new Observable((observer) => {
      observer.error(apiError);
    });
  }
}
