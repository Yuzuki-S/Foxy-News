import React from 'react'
import { connect } from 'react-redux'

//Meeting data

function costPerHour(props) {

  const totalCostPerHour = attendess.map(attendee => {
    return attendee.costPerHour;
  }).reduce((i,j)=>{return i+j})

  return <div className="container">
    <h2 className="title is-2">{totalCostPerHour}</h2>
  </div>
}

export default connect()(costPerHour)
