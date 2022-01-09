// lib functions for registering backend timers

import {addOpenTimer} from "apis/storage-api";

/** register an open timer. add timer information to storage and begin chrome alarm to remove timer
 *  at end of duration */
function registerOpenTimer(name:string,duration:number,url:string):void
{
    addOpenTimer(name,duration,url);
}