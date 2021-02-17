import React, { Component } from "react";

import ScoreBar from "../../components/scoreBar/ScoreBar";
import Option from "../../components/gameOption/Option";
import { Data } from "../../data/data";
import { choice } from "../../utils/utils";
import { gameResult } from "../../utils/utils";
import Button from "../../components/button/Button";

import "./Game.scss";

const initialState = {
  userSelect: null,
  randomSelect: null,
  isTimer: false,
  winnerText: "",
  timer: 3,
};

class Game extends Component {
  state = {
    ...initialState,
    currentScore: 0,
  };

  restart = () => {
    this.setState({
      ...initialState,
      currentScore: this.state.currentScore,
    });
  };

  randomChoice = () => {
    const randomId = Math.floor(Math.random() * 3);
    const randomChoice = Object.keys(choice)[randomId];
    return randomChoice;
  };

  play = (select) => {
    this.setState({
      userSelect: select,
      isTimer: true,
    });
    const randomChoice = this.randomChoice();
    const winnerText = gameResult(select, randomChoice);

    this.setState({
      randomSelect: randomChoice,
      winnerText,
    });
  };

  componentDidUpdate() {
    if (this.state.timer === 3 && this.state.userSelect) {
      this.intervalId = setInterval(() => {
        if (this.state.timer === 1) {
          let score = this.state.currentScore;
          if (this.state.winnerText === "You Won") {
            score += 1;
          } else if (this.state.winnerText === "You Lost") {
            score -= 1;
          }
          clearInterval(this.intervalId);
          this.setState({
            isTimer: false,
            currentScore: score,
          });
        }
        this.setState({
          timer: this.state.timer - 1,
        });
      }, 400);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app-game-container">
        <ScoreBar score={this.state.currentScore} />
        {!this.state.userSelect ? (
          <div className="app-game-container__block-start">
            <Option
              Icon={Data[choice.rock].icon}
              color={Data[choice.rock].color}
              onClick={() => {
                this.play(choice.rock);
              }}
          />
            <Option
              Icon={Data[choice.paper].icon}
              color={Data[choice.paper].color}
              onClick={() => {
                this.play(choice.paper);
              }}
            />
            <Option
              Icon={Data[choice.scissors].icon}
              color={Data[choice.scissors].color}
              onClick={() => {
                this.play(choice.scissors);
              }}
              />
          </div>
        ) : (
          <div className="app-game-container__block-start">
            <Option
              Icon={Data[this.state.userSelect].icon}
              color={Data[this.state.userSelect].color}
            />
            {this.state.isTimer ? (
              <div className="app-game-container__block-start__timer">
                {this.state.timer}
              </div>
            ) : (
              <div className="app-game-container__block-start">
                <div className="app-game-container__block-start__block-restart">
                  <Button
                    className="app-game-container__block-start__block-restart__btn"
                    text="Restart"
                    onClick={this.restart}
                  />
                  <span>{this.state.winnerText}</span>
                </div>
                <Option
                  Icon={Data[this.state.randomSelect].icon}
                  color={Data[this.state.randomSelect].color}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Game;
