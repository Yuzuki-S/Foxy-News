

const initState = {
    play: false,
    isFirstPlay: true,
    totalTime: 0
}

    // function isFirstTS(first){
    //     if (first){
    //         return new Date()
    //     } else {
    //         return state.timestamp
    //     }
    // }

export default function timer (state = initState, action) {
  


    switch (action.type) {
        
        case 'START_TIMER':
            return {
                ...state,
                play: true,
                timestamp: isFirstTS(state.isFirstPlay),
                session_start: new Date(),
                extra: action.thing
            }
        case 'PAUSE_TIMER':
            return {
                ...state,
                play: false,
                isFirstPlay: false,
                totalTime: state.totalTime+=(state.session_start-new Date())
            }
        case 'STOP_TIMER':
            return {
                ...state,
                play: false,
                isFirstPlay: false,
                totalTime: state.totalTime+=(state.session_start-new Date())
            }
      default:
        return state
    }
  }