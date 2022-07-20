import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from './global.service';
import { ConfirmDialog } from '../constance';
import { ConfirmTemplate } from '../dialog/confirm-template/confirm-template';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})

export class AppProxyService {
  private isDialogShow: boolean = false;

  constructor(private http: HttpClient,
    public dialog: MatDialog,
    public globalService: GlobalService
  ) { }

  public get(url: string): Promise<any> {
    GlobalService.spinner = true;
    return this.http
      .get<any>(`${environment.baseUrl}${url}`, {})
      .toPromise()
      .then((result) => {
        return result;
      })
      .catch(async (err) => {
        if (err.status == 408 || err.status == 0 || !navigator.onLine) {
          let data: ConfirmDialog = {
            title: await this.globalService.getValueByKey("Something went wrong..."),
            content: await this.globalService.getValueByKey("We recommend to try again later."),
            confirmText: await this.globalService.getValueByKey("Thanks anyway!"),
          };
          if (!this.isDialogShow) {
            this.isDialogShow = true;
            this.dialog.open(ConfirmTemplate, {
              data: data,
            });
            this.dialog.afterAllClosed.subscribe(() => { this.isDialogShow = false; });
          }
        } else if (err.status >= 500) {
          let data: ConfirmDialog = {
            title: await this.globalService.getValueByKey("Something went wrong..."),
            content: await this.globalService.getValueByKey("We recommend to try again later."),
            confirmText: await this.globalService.getValueByKey("Thanks anyway!"),
          };
          if (!this.isDialogShow) {
            this.isDialogShow = true;
            this.dialog.open(ConfirmTemplate, {
              data: data,
            });
            this.dialog.afterAllClosed.subscribe(() => { this.isDialogShow = false; });
          }
        } else {
          let data: ConfirmDialog = {
            title: await this.globalService.getValueByKey("Something went wrong..."),
            content: await this.globalService.getValueByKey("We recommend to try again later."),
            confirmText: await this.globalService.getValueByKey("Thanks anyway!"),
          };
          if (!this.isDialogShow) {
            this.isDialogShow = true;
            this.dialog.open(ConfirmTemplate, {
              data: data,
            });
            this.dialog.afterAllClosed.subscribe(() => { this.isDialogShow = false; });
          }
        }
      })
      .finally(() => {
        setTimeout(() => {
          GlobalService.spinner = false;
        }, 1000);
      });
  }

  public post(url: string, data: any, headers:any ): Promise<any> {
    GlobalService.spinner = true;
    return this.http
      .post<any>(`${environment.baseUrl}${url}`, data, headers).pipe(catchError((e) => {
        return this.errorHandler(e)
      })).toPromise().finally(() => {
        setTimeout(() => {
          GlobalService.spinner = false;
        }, 1000)
      });
  }

  public async errorHandler(error: HttpErrorResponse) {
    if (error.status == 408 || error.status == 0 || !navigator.onLine) {
      let data: ConfirmDialog = {
        title: await this.globalService.getValueByKey("Something went wrong..."),
        content: await this.globalService.getValueByKey("We recommend to try again later."),
        confirmText: await this.globalService.getValueByKey("Thanks anyway!"),
      };
      if (!this.isDialogShow) {
        this.isDialogShow = true;
        this.dialog.open(ConfirmTemplate, {
          data: data,
        });
        this.dialog.afterAllClosed.subscribe(() => { this.isDialogShow = false; });
      }
    } else if (error.status >= 500) {
      let data: ConfirmDialog = {
        title: await this.globalService.getValueByKey("Something went wrong..."),
        content: await this.globalService.getValueByKey("We recommend to try again later."),
        confirmText: await this.globalService.getValueByKey("Thanks anyway!"),
      };
      if (!this.isDialogShow) {
        this.isDialogShow = true;
        this.dialog.open(ConfirmTemplate, {
          data: data,
        });
        this.dialog.afterAllClosed.subscribe(() => { this.isDialogShow = false; });
      }
    } else {
      let data: ConfirmDialog = {
        title: await this.globalService.getValueByKey("Something went wrong..."),
        content: await this.globalService.getValueByKey("We recommend to try again later."),
        confirmText: await this.globalService.getValueByKey("Thanks anyway!"),
      };
      if (!this.isDialogShow) {
        this.isDialogShow = true;
        this.dialog.open(ConfirmTemplate, {
          data: data,
        });
        this.dialog.afterAllClosed.subscribe(() => { this.isDialogShow = false; });
      }
    }
    return Observable.throw(error.message);
  }

}
