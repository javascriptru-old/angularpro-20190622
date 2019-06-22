import { Component, OnInit } from '@angular/core';
import { PrivateService } from '../private.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  // providers: [PrivateService],
  viewProviders: [PrivateService]
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
