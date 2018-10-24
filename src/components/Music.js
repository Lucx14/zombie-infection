import React, { PureComponent } from 'react';

class Music extends PureComponent {
  constructor(props) {
    super(props)
    this.file = "./soundEffects/HorrorMusic.mp3"
    this.audio = new Audio(this.file)
  }

  play = () => {
    this.audio.loop = true
    this.audio.play()
  }

  render() {
    return (
      <div>
        {this.play()}
      </div>
    )
  }
}

export default Music;
