export const choice = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

export const gameResult = (playerChoice, computerChoice) => {
  if(playerChoice == computerChoice){
    return "Draw";
  }
  
  switch (playerChoice) {
    case choice.rock:
      if (computerChoice === choice.scissors) {
        return "You Won";
      } else {
        return "You Lost";
      }
    case choice.paper:
      if (computerChoice === choice.rock) {
        return "You Won";
      } else {
        return "You Lost";
      }
    case choice.scissors:
      if (computerChoice === choice.paper) {
        return "You Won";
      } else {
        return "You Lost";
      }
    default:
      throw new Error("Something is wrong");
  }
};
