// types for representation of timer

type TimerAction="close"|"open"

interface TimerInfo
{
    name:string
    id:string

    startTime:string // date string
    duration:number // seconds

    action:TimerAction

    revealed:boolean
}

interface OpenTimerInfo extends TimerInfo
{
    // url to open when timer is complete
    url:string
}

interface CloseTimerInfo extends TimerInfo
{
    // not yet sure how this is supposed to look.
    // probably try implemnting the open timer first
    // then research how to select and save a tab
    tab:string
}