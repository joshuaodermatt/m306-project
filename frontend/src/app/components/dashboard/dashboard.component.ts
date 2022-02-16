import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { WebsitesService } from 'src/app/services/websites.service';
import { RequestService } from 'src/app/services/request.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private websitesService: WebsitesService, private requestService: RequestService, private toast: HotToastService) { }

  faSpinner = faSpinner;
  faSearch = faSearch;
  faInfo = faInfo;
  faPlus = faPlus;

  url: string= '';

  websiteUrl = '';
  logo : string = '';
  name: string = '';
  state : string = '';
  ping: string = '';

  websites = this.websitesService.getWebsites();
  searching:boolean = false;

  ngOnInit(): void {
  }

  getSiteInformation(){
    if(!this.validateURL(this.url)){
      this.toast.error('Error.  Invalid URL');
    }
    this.requestService.getInfo(this.url);

    this.logo = this.requestService.informations.logo;
    this.state = this.requestService.informations.state;
    this.name = this.requestService.informations.name;
    this.websiteUrl = this.requestService.informations.url;
    this.ping = this.requestService.informations.ping;

    this.allInfosAvailable();
  }

  allInfosAvailable():boolean{
    if(
      this.websiteUrl != '' &&
      this.logo != '' &&
      this.name  != '' &&
      this.ping != ''
    ){
      return true;
    }else{
      return false;
    }
  }

  addSite(){
    this.websitesService.websites.push()
  }

  validateURL(url:string){
    let regex = new RegExp(/^(http: \/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
    return regex.test(url);
  }

}