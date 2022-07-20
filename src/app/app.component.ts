import { AfterContentChecked, AfterViewChecked, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SupportedLanguageTypeCode } from './constance';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked, AfterContentChecked {
  staticShowSpinner = GlobalService.spinner;

  constructor(private translate: TranslateService,
    public globalService:GlobalService) {
    this.globalService.getLanguage();
  }

  ngAfterViewChecked(): void {
    this.globalService.setDirection("app-root");
  }

  ngAfterContentChecked() {
    this.staticShowSpinner = GlobalService.spinner;
  }

}


