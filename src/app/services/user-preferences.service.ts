import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserPreferences} from '../model/UserPreferences';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  private readonly url: string;

  getUserPreferences(): Observable<UserPreferences> {
    return this.http.get<UserPreferences>(this.url + '/getUserPreferences?username=' + sessionStorage.getItem('username'));
  }

  updateUserPreferences(userPreferences: UserPreferences): Observable<boolean> {
    return this.http.put<boolean>(this.url + '/updateUserPreferences/' + sessionStorage.getItem('username'), userPreferences);
  }
}
