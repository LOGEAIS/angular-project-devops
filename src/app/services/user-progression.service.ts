import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProgression} from '../model/UserProgression';

@Injectable({
  providedIn: 'root'
})
export class UserProgressionService {

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  private readonly url: string;

  getUserProgression(): Observable<UserProgression> {
    return this.http.get<UserProgression>(this.url + '/getUserProgression?username=' + sessionStorage.getItem('username'));
  }

  updateUserProgression(userProgression: UserProgression): Observable<boolean> {
    return this.http.put<boolean>(this.url + '/updateUserProgression/' + sessionStorage.getItem('username'), userProgression);
  }
}
