import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PositionAndOfficeService {

  constructor(private http: HttpClient) { }

  getAllPosition():Observable<any>{
    return this.http.get<any>(API_URL+'/positions');
  }

  getAllOffice():Observable<any>{
    return this.http.get<any>(API_URL + '/offices');
  }
}
