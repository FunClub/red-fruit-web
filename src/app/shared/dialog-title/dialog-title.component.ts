import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog-title',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.css']
})
export class DialogTitleComponent implements OnInit {

  /**
   * 图标
   */
  @Input()
  icon:string;

  /**
   * 标题
   */
  @Input()
  title:string;

  @Input()
  matDialogRef:any;
  constructor() { }

  ngOnInit() {
  }

  close(){
    this.matDialogRef.close()
  }
}
