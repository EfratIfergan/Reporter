import { AfterViewChecked, Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: 'about-us',
  templateUrl: 'about-us.html',
  styleUrls: ['about-us.css']
})
export class AboutUs implements AfterViewChecked{
  constructor(public dialogRef: MatDialogRef<any>,
    public globalService: GlobalService
  ) { dialogRef.disableClose = true }

  ngAfterViewChecked(): void {
    this.globalService.setDirection("dialog");
  }
}
