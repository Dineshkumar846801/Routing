import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';

@Injectable()




export class AuthGuardService implements CanActivate, CanActivateChild {


    constructor(private authService: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        //sync task


        //cheeck user authenticated or not
        // const token_info = localStorage.getItem('token');
        //user authenticated
        // if (token_info != null) {
        //     return true;
        // }

        // var promise = new Promise<boolean>((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(true);
        //     }, 3000)
        // });
        // return promise;


        //async task
        // return new Observable<boolean>((observer) => {
        //     setTimeout(() => {
        //         observer.next(true);                
        //         observer.complete();
        //     }, 3000)

        // })

       return this.authService.isAuththenticated().then((data) => {
            if (data) {
                return true;
            } else {
                return this.router.navigate(['/'])
            }
        })

    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        return this.canActivate(route, state);
    }


}