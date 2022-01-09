import {nanoid} from "nanoid";

/** get timers from storage */
async function getTimers():Promise<TimersDict>
{
    const storage:AutoTabTimerStorage=await chrome.storage.local.get("timers");
    return storage.timers || {};
}

/** add an open-type timer to storage */
async function addOpenTimer(name:string,duration:number,url:string):Promise<void>
{
    const newTimerId:string=nanoid();
    const newTimerInfo:OpenTimerInfo={
        name,
        id:newTimerId,

        startTime:new Date().toISOString(),
        duration,

        action:"open",
        url,

        revealed:false
    };

    const timers:TimersDict=await getTimers();

    timers[newTimerId]=newTimerInfo;

    return chrome.storage.local.set({timers});
}