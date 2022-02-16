import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
    this.toast.error('Error.  Invalid URL');
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
      console.log("true")
      return true;
    }else{
      console.log("false")
      return false;
    }
  }

}