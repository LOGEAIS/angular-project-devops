import {Component, OnInit} from '@angular/core';
import {UserProfile} from '../model/UserProfile';
import {ConnexionService} from './connexion.service';
import {Router} from '@angular/router';
import {UserPreferences} from '../model/UserPreferences';
import {UserProgression} from '../model/UserProgression';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  mail: string;
  password: string;

  constructor(private connexionService: ConnexionService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const defaultPreferences = new UserPreferences('Français', 1, 1, 1, 25, 30);
    const defaultProgression = new UserProgression('1', '');
    const userProfile = new UserProfile(this.mail, this.password, defaultProgression,  defaultPreferences);

    this.connexionService.authenticate(userProfile).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('username', userProfile.username);
        sessionStorage.removeItem('gameLoaded');
        this.router.navigate(['']);
      }
    });
  }

}
