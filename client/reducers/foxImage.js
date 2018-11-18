import {RECEIVE_IMAGE} from '../actions/foxImage'


function foxImage (state="", action){
    switch(action.type){
    case RECEIVE_IMAGE:
    console.log('reducer',action.image)
        return action.image
    default:
        return state
    }
}

export default foxImage