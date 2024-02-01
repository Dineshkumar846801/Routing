import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

export interface Ideactivate{
    canExit:()=> boolean | Promise<boolean> | Observable<boolean>
}
export class CanDeactiveGuardService implements CanDeactivate< Ideactivate>{
    canDeactivate(component: Ideactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot)  {
       return  component.canExit(); 
       
    }
}