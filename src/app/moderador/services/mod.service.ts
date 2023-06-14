import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ModService {
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  aprobarCurso(id: number) {
    return this.http.post(`${this.BASE_URL}/curso-aprobar`, { id });
  }
}
