import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticated = true;

  canActivate():boolean {
    if(this.authenticated){
      return true;
    }else{
      return false;
    }
  }
}
