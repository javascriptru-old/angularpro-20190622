import { Injectable, Inject, Self, SkipSelf, Host, Optional } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(log: LogService) { }
}


/*

@Component
@Directive
@Pipe
@Injectable

*/