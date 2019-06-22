import { Component, OnInit, Input, Attribute } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [UserService]
})
export class ChildComponent implements OnInit {

  // @Input() name: string;

  constructor(@Attribute('name') public name: string = 'Alice') { 

  }

  ngOnInit() {
  }

}
