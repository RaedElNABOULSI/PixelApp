import React from "react";
import "./HeroInput.scss";
import Button from "@material-ui/core/Button";

export default function HeroInput() {
  return (
    <div className="heroInput">
      <a href="#">Travel</a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="#">Stay</a>
      <div className="options">
        <div className="options-input">
          <p>Where</p>
          <p className="question">Do you want to travel?</p>
        </div>
        <div className="options-input">
          <p>When</p>
          <p className="question">Do you want to go?</p>
        </div>
        <div className="options-third-input">
          <div>
            <p>Who</p>
            <p className="question">Are you going with?</p>
          </div>
          <div>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className="submit-button"
            >
              Show all trips
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
