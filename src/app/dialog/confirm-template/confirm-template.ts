import { DOCUMENT } from "@angular/common";
import { AfterViewChecked, Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ConfirmDialog } from "src/app/constance";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: 'confirm-template',
  templateUrl: 'confirm-template.html',
  styleUrls: ['confirm-template.css']
})
export class ConfirmTemplate implements AfterViewChecked {
  constructor(public dialogRef: MatDialogRef<any>,
    public globalService: GlobalService,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialog,
    @Inject(DOCUMENT) private document: any,
  ) { dialogRef.disableClose = true }

  public confirm(): void {
    this.data.transferToClose == true ? document.location.href = "https://www.google.com/" : '';
    this.dialogRef.close({ status: true })
  }

  ngAfterViewChecked(): void {
    this.globalService.setDirection("dialog");
  }
}
