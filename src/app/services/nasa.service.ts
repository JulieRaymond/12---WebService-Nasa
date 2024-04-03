import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  title = 'myFirstWebService';
  private apiKey = 'q2gUAAm6Ge85lFapyJwyVObFnauvGxwb0BR1oXI7\n';

  constructor(private http: HttpClient) {
  }

  getImageOfTheDay(): Observable<any> {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
