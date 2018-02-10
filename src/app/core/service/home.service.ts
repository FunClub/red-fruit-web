import { Injectable } from '@angular/core';
import {User} from '../data/dto/user.data';

@Injectable()
export class HomeService {
  user:User;
  constructor() { }

}
