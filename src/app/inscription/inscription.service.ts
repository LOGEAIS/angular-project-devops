import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from '../model/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/register';
  }

  private readonly url: string;

  register(userProfile: UserProfile){
    return this.http.post(this.url, userProfile);
  }
}
