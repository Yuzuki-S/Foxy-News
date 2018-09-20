

const initState = {
    play: false,
    isFirstPlay: true,
    totalTime: 0
}

    function isFirstTS(first, state){
        if (first){
            return new Date()
        } else {
            return state.timestamp
        }
    }

export default function timer (state = initState, action) {
  


    switch (action.type) {
        
        case 'START_TIMER':
            return {
                ...state,
                play: true,
                timestamp: isFirstTS(state.isFirstPlay, state),
                sessionStart: new Date(),
                extra: action.thing
            }
        case 'PAUSE_TIMER':
            return {
                ...state,
                play: false,
                isFirstPlay: false,
                totalTime: state.totalTime+=(new Date()-state.sessionStart)
            }
        case 'STOP_TIMER':
            return {
                ...state,
                play: false,
                isFirstPlay: false,
                totalTime: state.totalTime+=(new Date()-state.sessionStart)
            }
      default:
        return state
    }
  }