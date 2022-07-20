import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { SupportedLanguage, SupportedLanguageTypeCode } from '../constance';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public static spinner: boolean = false;
  public direction: string = "ltr";
  public languageCode: string = SupportedLanguageTypeCode.English;

  constructor(public dialog: MatDialog,
    @Inject(DOCUMENT) private document: any,
    private translate: TranslateService) { }

  public openDialog(type: any, data?: any) {
    this.dialog.open(type, {data});
  }

  public setDirection(elementId: string) {
    this.translate.get("Direction").subscribe((response) => {
      this.direction = response != 'Direction' ? response : "ltr";
    });
    const element = (document.getElementById(elementId)) as HTMLElement;
    element.setAttribute("lang", this.languageCode);
    element.setAttribute("dir", this.direction);
  }

  public getLanguage() {
    let currentAddress: string = this.document.location.href.toString();
    currentAddress = currentAddress.split("#")[0];

    if (currentAddress.indexOf("language=") != -1) {
      this.languageCode = SupportedLanguage.indexOf(currentAddress.substring(currentAddress.length-2, currentAddress.length)) == -1 ? SupportedLanguageTypeCode.English : currentAddress.substring(currentAddress.length-2, currentAddress.length);
      this.document.location.href = currentAddress +`#/`;
    } else {
      this.languageCode = SupportedLanguage.indexOf(this.translate.getBrowserLang()) == -1 ? SupportedLanguageTypeCode.English : this.translate.getBrowserLang();
      this.document.location.href = currentAddress + `?language=${this.languageCode}#/`;
    }
    this.translate.use(this.languageCode);
  }

  public getValueByKey(key: string) {
    return this.translate.get(key).toPromise();
  }
}
