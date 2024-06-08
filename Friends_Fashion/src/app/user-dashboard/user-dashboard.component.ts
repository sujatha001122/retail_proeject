import { Component, OnInit } from '@angular/core';
import { MegaMenuItem} from 'primeng/api';
import { ProductserviceService } from '../services/productservice.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(public productservice:ProductserviceService) { }
  items: MegaMenuItem[]=[];
  listData:any;
  ngOnInit(): void {}

}


