import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../validator/must-match.validator';
import {UserProfile} from '../model/UserProfile';
import {InscriptionService} from './inscription.service';
import {Router} from '@angular/router';
import {UserPreferences} from '../model/UserPreferences';
import {UserProgression} from '../model/UserProgression';

@Component({
  selector: 'app-connexion',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  registerForm: FormGroup;
  mail: string;
  confirmPassword: string;
  password: string;
  submitted = false;

  constructor(
    private inscriptionService: InscriptionService,
    private router: Router,
    private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    const defaultPreferences = new UserPreferences('Français', 1, 1, 1, 25, 30);
    const defaultProgression = new UserProgression('1', ' ');
    const userProfile = new UserProfile(this.registerForm.get('mail').value,
      this.registerForm.get('password').value,
      defaultProgression, defaultPreferences);

    this.inscriptionService.register(userProfile).subscribe(isRegistered => {
      if (isRegistered) {
        this.router.navigate(['/authentification']);
      }
    });
  }
}
