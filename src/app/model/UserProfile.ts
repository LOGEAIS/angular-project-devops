import {UserProgression} from './UserProgression';
import {UserPreferences} from './UserPreferences';

export class UserProfile{
  username: string;
  password: string;
  progression: UserProgression;
  preferences: UserPreferences;

  constructor(username: string, password: string, progression: UserProgression, preferences: UserPreferences) {
    this.username = username;
    this.password = password;
    this.progression = progression;
    this.preferences = preferences;
  }
}
