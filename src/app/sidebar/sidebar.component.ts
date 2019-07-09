import {  Component, OnInit , Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { slideInAnimation } from '../route-animation'
import { PageScrollService } from 'ngx-page-scroll-core'; 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [ 
  slideInAnimation ]
})
export class SidebarComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
   }

}
