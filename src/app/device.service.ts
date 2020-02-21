import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeviceService {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';

  getDevices() {
    return this.http.get(this.configUrl);
  }

  addDevices (device): Observable {
  return this.http.post(this.url, device, httpOptions)
    .pipe(
      catchError(this.handleError('', hero))
    );
}

}