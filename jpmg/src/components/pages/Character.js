import React, { Component } from "react";
import Button from "../Button"

class Character extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      //fill with Character stuff added button as placeholder
      <div className="Character">
        <h2>This is where you make your Character</h2>
        <Button />
      </div>
    )
  }
}

export default Character;