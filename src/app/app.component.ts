import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from './dailog/dailog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-6';
  // dialog: any;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DailogComponent);
  }
}
