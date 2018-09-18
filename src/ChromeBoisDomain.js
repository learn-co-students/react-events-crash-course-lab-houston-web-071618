import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
 
  handleMouseMove = (event) => {
    // drawChromeBoiAtCoords({ x: event.screenX, y: event.screenY });
    drawChromeBoiAtCoords(event.clientX, event.clientY);
  }

  keyHandler = (event) => {
    if(event.key === 'a') {
      resize('+');
    } else if (event.key === 's') {
      resize('-');
    }
  }

  clickHandler = () => {
    toggleCycling()
  }

  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.keyHandler}
        onClick={this.clickHandler}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
