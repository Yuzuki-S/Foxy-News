import React from 'react'
import { connect } from 'react-redux'
// import MeetingList from './MeetingList'
// import MeetingUsersList from './MeetingUsersList'


// Main Layout page

class TimerBox extends React.Component {

  constructor(props) {
    super(props)


    this.state = {
      timercount: 0,
      count: false
    }

    this.timer = this.timer.bind(this)
    this.restart = this.restart.bind(this)
  }
  //Initial state will be FIRSTPLAY=TRUE, PLAY=FALSE while PLAY=true run timer
componentDidMount(){
  this.timer()
}
  //On start set TIMESTAMP if FIRSTPLAY=TRUE and PLAY=TRUE, 
  //On pause set FIRSTPLAY=FALSE and PLAY=FALSE, 
  //On stop set FIRSTPLAY=FALSE and PLAY=FALSE, TOTALTIME=timer

  // timer() {
  //   let totalTime = this.state.timercount
  //   console.log('TT ' + totalTime)
  //   setInterval(() => {
  //     totalTime += 1;
  //   }, 1000)
  //   this.setState({
  //     timercount: totalTime
  //   })
  // }
  timer(){
    if (!this.state.count){

        {let interval = setInterval(() => {
        this.setState({
          timercount: ((this.state.timercount +1)),
          count: true,
          interval: interval
        })
      }, 1000)
    } 
}
  }
 restart(interval){
  clearInterval(interval)
  this.setState({
    count:false
  })
 }


  render() {
    return (

      <div >
        <button onClick={()=> this.restart()}>Stop</button>
        <button onClick={()=> this.timer()}>Play</button>
        <button>Pause</button>

        <p>Time</p>
        <p>{Math.floor(this.state.timercount)}</p>
        <p>Dollars</p>

      </div>
    )
  }


}

export default connect()(TimerBox)