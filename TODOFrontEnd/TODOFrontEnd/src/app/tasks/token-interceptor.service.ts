import { Injectable } from '@angular/core';
import{HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import{Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    let token=localStorage.getItem('token')
    let tokenizeReq=req.clone({
      setHeaders:{
        Authorization:"Bearer "+token
      }
    })
    return next.handle(tokenizeReq)
  }

  constructor() { }

}
