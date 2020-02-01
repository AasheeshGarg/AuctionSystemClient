import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin' : '*'
    })
  };
 
  constructor(private http: HttpClient) { }

  register(data): Observable<any> {
    console.log(data);
    return this.http.post<any>('http://localhost:8081/users/registration' , data, this.httpOptions).pipe(
      map((response) => 
      console.log(response)
      ),
      catchError(this.handleError<any>('registerUser'))
    );
  }

  login(data): Observable<any> {
    console.log(data);
    return this.http.post<any>('http://localhost:8081/users/login', data, this.httpOptions);
  }

  addProduct(data): Observable<any> {
    console.log(data);
    return this.http.post<any>('http://localhost:8081/product', data, this.httpOptions);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/product/1', this.httpOptions);
  }

  getResult(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/result/5', this.httpOptions);
  }

  getAuctions(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/auctions', this.httpOptions);
  }

  saveBid(data): Observable<any> {
    console.log(data);
    return this.http.post<any>('http://localhost:8081/bid', data, this.httpOptions);
  }

  saveAuction(data): Observable<any> {
    console.log(data);
    return this.http.post<any>('http://localhost:8081/auction', data, this.httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
