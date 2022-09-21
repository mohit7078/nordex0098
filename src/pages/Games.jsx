import React, { Component } from 'react'
import Benefits from '../components/Benefits'
import Headsets from '../components/Headsets'
import Skygames from '../components/Skygames'
import Surpricing from '../components/Surpricing'



export class Games extends Component {
  render() {
    return (
      <>
    <Headsets/>
    <Surpricing/>
    <Skygames/>
    <Benefits/>

      </>
    )
  }
}

export default Games
