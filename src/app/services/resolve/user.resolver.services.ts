import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user.service";

interface User{
    id:string;
    name:string;
}
@Injectable()

export class UserResovlerService implements Resolve<User>{
    constructor(private UserService:UserService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> | any {
        let id = route.params['id'];

        let details = this.UserService.getDetails(id);
        return details;
    }
}