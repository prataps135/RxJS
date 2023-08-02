import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements AfterViewInit {
  @ViewChild('addBtn') button!: ElementRef;

  constructor(private _designUntiliy:DesignUtilityService){}

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.button.nativeElement, 'click').subscribe(data => {
      let countVal = 'Video ' + count++;
      this._designUntiliy.elAppend(countVal,'elContainer1');
      this._designUntiliy.elAppend(countVal,'elContainer2');
    });
  }
}
