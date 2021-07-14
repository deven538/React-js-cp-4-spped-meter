// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prev => {
      if (prev.speed < 200) {
        return {speed: prev.speed + 10}
      }
      return {speed: prev.speed}
    })
  }

  onApplyBreak = () => {
    this.setState(prev => {
      if (prev.speed > 0) {
        return {speed: prev.speed - 10}
      }
      return {speed: prev.speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="head">SPEEDOMETER</h1>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedmeterimage"
          />
        </div>
        <h1 className="para">
          speed is <span className="speed-editor">{speed}mph</span>
        </h1>
        <p className="min-and-max-speeds">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="button-group">
          <button
            className="Accelerate-btn"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            className="Apply-brk-btn"
            type="button"
            onClick={this.onApplyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
