import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()

export class HandleError {
    constructor(
        private _notification: NzNotificationService
    ) { }

    handle(res: HttpErrorResponse): Observable<any> {
        const {error} = res;
        this._notification.error(res.status.toString(), error.message)
        return throwError(error);
    }
}
