import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from '../model/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) {
    var baseURL = window.location.href.replace("http://", "").split(":")[0];
    this.url = 'http://' + baseURL + ':8080/register';
  }

  private readonly url: string;

  register(userProfile: UserProfile){
    return this.http.post(this.url, userProfile);
  }
}
