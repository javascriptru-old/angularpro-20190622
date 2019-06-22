import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new';

  constructor() {
    const worker = new Worker('./my-worker.worker', { type: 'module' });
    worker.onmessage = ({data}) => {
       console.log(data);
    };
    worker.postMessage('hello!');
  }
}
