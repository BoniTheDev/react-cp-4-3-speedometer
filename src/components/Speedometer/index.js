// Write your code here

import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    } else {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  onApplyBrakes = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    } else {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="meter-image"
        />

        <h1 className="meter-speed">Speed is {speed}mph</h1>
        <p className="meter-paragraph">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button
            className="accelerate-button"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            className="brake-button"
            type="button"
            onClick={this.onApplyBrakes}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
