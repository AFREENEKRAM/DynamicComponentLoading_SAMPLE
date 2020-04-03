import { Injectable } from '@angular/core';
import { dispatch } from 'rxjs/internal/observable/pairs';


export const SHOW_LOOKUP ='SHOW_LOOKUP';



@Injectable ({
    providedIn :"root"
})

export class CommonAction {

  
    constructor() {

    }



    showLookup() {
        return { type: SHOW_LOOKUP, payload: true };
    }
    hideLookup() {
        return { type: SHOW_LOOKUP, payload: false };
    }
   

}