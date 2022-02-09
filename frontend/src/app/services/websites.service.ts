import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {

  websites: any =  [
    {
      name: 'Google',
      url: 'http://www.google.com',
      logo: 'https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK',
      state: 'online',
      ping: '15ms'
    },{
      name: 'Netflix',
      url: 'http://www.netflix.com',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732228.png',
      state: 'online',
      ping: '14ms'
    },
    {
      name: 'Youtube',
      url: 'http://www.youtube.com',
      logo: 'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc',
      state: 'online',
      ping: '44ms'
    },
    {
      name: 'Twitch',
      url: 'http://www.twitch.tv',
      logo: 'https://pbs.twimg.com/profile_images/1290351246428135424/vxjDQJDq_400x400.png',
      state: 'online',
      ping: '23ms'
    }
  ]

  getWebsites(){
    return this.websites;
  }

  constructor() { }
}
