/** dict of timers, keyed by ID */
type TimersDict=Record<string,TimerInfo>

interface AutoTabTimerStorage
{
    timers:TimersDict
}