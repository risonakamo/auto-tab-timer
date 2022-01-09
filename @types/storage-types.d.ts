/** dict of timers, keyed by ID */
type TimersDict=Record<string,TimerInfo>

/** extension storage. all fields optional because storage state is not guaranteed */
interface AutoTabTimerStorage
{
    timers?:TimersDict
}