

export function startTimer () {
    
    return {
      type: 'START_TIMER'
    }
  }

export function stopTimer(){
    return {
        type: 'STOP_TIMER'
    }
}

export function pauseTimer(){
    return {
        type: 'PAUSE_TIMER'
    }
}
