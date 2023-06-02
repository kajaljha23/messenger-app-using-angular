import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessengerDataService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(this.dataUrl);
  }
}
