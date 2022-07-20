import { AfterViewChecked,Component,} from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: 'initial-message',
  templateUrl: 'initial-message.html',
  styleUrls: ['initial-message.css']
})
export class InitialMessage implements AfterViewChecked {
  constructor(public dialogRef: MatDialogRef<any>,
    public globalService: GlobalService
  ) { dialogRef.disableClose = true }

  ngAfterViewChecked(): void {
    this.globalService.setDirection("dialog");
  }
}
