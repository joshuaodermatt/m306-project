import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) { }

  informations: any = [{
    name: '', 
    logo: '',
    url: '',
    state: '',
    ping:'',
  }]

  async getInfo(url:string){
    this.informations.logo ='https://www.google.com/s2/favicons?sz=64&domain_url='+url;
    this.informations.ping = '14ms';
    this.informations.state = 'online';
    this.trimWebsiteName(url);
    this.checkURL(url);
  }

  trimWebsiteName(url:string){
    this.informations.name = url.replace(/^https?:\/\//, '');
    this.informations.name = this.informations.name.split('.')[0];
    this.informations.name = this.informations.name.charAt(0).toUpperCase() + this.informations.name .slice(1);;
  }

  checkURL(url:string){
    if(url.includes("https://")){
      this.informations.url = url;
    }else{
      this.informations.url = 'https://'+url;
    }
  }
}
