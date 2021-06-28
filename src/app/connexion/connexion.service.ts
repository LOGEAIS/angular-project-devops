import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from '../model/UserProfile';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient) {
    var baseURL = window.location.href.replace("http://", "").split(":")[0];
    this.url = 'http://' + baseURL + ':8080/authenticate';
  }

  private readonly url: string;

  authenticate(userProfile: UserProfile): Observable<boolean> {
    return this.http.post<boolean>(this.url, userProfile);
  }
}
