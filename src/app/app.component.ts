import {Component, ViewContainerRef} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  template:`
    <ng-progress [direction]="'ltr+'" [min]="20" [max]="1" [speed]="200"  [trickleSpeed]="300"
                 [spinner]="true" [spinnerPosition]="'left'" [thick]="false" [meteor]="true"
                 [color]="'red'" [ease]="'linear'"></ng-progress>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
}
