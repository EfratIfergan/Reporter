import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment.prod';
import { ConfirmDialog, ReportEntity } from '../constance';
import { AboutUs } from '../dialog/about-us/about-us';
import { ConfirmTemplate } from '../dialog/confirm-template/confirm-template';
import { InitialMessage } from '../dialog/initial-message/initial-message';
import { AppProxyService } from '../services/app-proxy.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-reporter',
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.css']
})
export class ReporterComponent implements OnInit {
  placeholder: string = '';
  reportData: ReportEntity = {} as ReportEntity;

  constructor(public translate: TranslateService,
    public globalService: GlobalService,
    public appProxyService: AppProxyService) { }

   ngOnInit() {
    this.translate.get("For example, your kids' school / pizza place.").subscribe((response) => {
      this.placeholder = response;
    })
    this.globalService.openDialog(InitialMessage);
  }

  public openAboutUsDialog() {
    this.globalService.openDialog(AboutUs);
  }

  public async sendReport() {
    console.log("Sent report with data", JSON.stringify(this.reportData));

    this.appProxyService.post("sendReport", this.reportData, { headers: {
      'Content-Type': "application/json",
      "BUTTERFLY_HOST_API_KEY": environment.BUTTERFLY_HOST_API_KEY
    }}).then(async response => {
      console.log(response);

      let data: ConfirmDialog = {
        title: await this.globalService.getValueByKey("Alright, sending your answers..."),
        content: await this.globalService.getValueByKey("Your message was accepted!"),
        confirmText: await this.globalService.getValueByKey("Leave"),
        transferToClose: true
      };
      this.globalService.openDialog(ConfirmTemplate, data);
    });
  }
}
