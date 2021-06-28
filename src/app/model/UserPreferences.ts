export class UserPreferences {
  language: string;
  musicVolume: number;
  voiceVolume: number;
  soundVolume: number;
  textSpeed: number;
  autoPlaySpeed: number;

  constructor(language: string, musicVolume: number, voiceVolume: number, soundVolume: number, textSpeed: number, autoPlaySpeed: number) {
    this.language = language;
    this.musicVolume = musicVolume;
    this.voiceVolume = voiceVolume;
    this.soundVolume = soundVolume;
    this.textSpeed = textSpeed;
    this.autoPlaySpeed = autoPlaySpeed;
  }


}
