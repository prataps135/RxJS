import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  elAppend(val: string, containerId: string) {
    let element = document.createElement('li');
    element.innerText = val;

    document.getElementById(containerId)?.appendChild(element);
  }
}
