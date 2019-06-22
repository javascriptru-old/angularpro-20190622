import { Component, OnInit } from '@angular/core';
import { PrivateService } from '../private.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(privateService: PrivateService) { 
    privateService.dosomething();
  }

  ngOnInit() {
  }

}
