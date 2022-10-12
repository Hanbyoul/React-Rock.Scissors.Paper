import "./App.css";
import Box from "./component/Box";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";

const choice = {
  rock: {
    name: "Rock",
    img: "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMHBhcGVyJTIwc2Npc3NvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  scissors: {
    name: "Scissors",
    img: "https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9jayUyMHBhcGVyJTIwc2Npc3NvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  paper: {
    name: "Paper",
    img: "https://images.unsplash.com/photo-1614032686158-b880f7e82c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9jayUyMHBhcGVyJTIwc2Npc3NvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
};

function App() {
  const [userselect, setUserSelect] = useState(null);
  const [computerselect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [uiresult, setUiresult] = useState("");
  const play = (UserChoice) => {
    setUserSelect(choice[UserChoice]);
    let computerchoice = randomitem();
    setComputerSelect(computerchoice);
    setResult(judgement(choice[UserChoice], computerchoice));
    setUiresult(
      judgement(choice[UserChoice], computerchoice) == "winer"
        ? "WIN"
        : judgement(choice[UserChoice], computerchoice) == "loser"
        ? "LOSE"
        : "Tie"
    );
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    if (user.name == computer.name) {
      return "Tie";
    } else if (user.name == "Scissors")
      return computer.name == "Paper" ? "winer" : "loser";
    else if (user.name == "Rock")
      return computer.name == "Scissors" ? "winer" : "loser";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "winer" : "loser";
  };

  const randomitem = () => {
    let ItemArray = Object.keys(choice);
    let random = Math.floor(Math.random() * ItemArray.length);
    let last = ItemArray[random];
    return choice[last];
  };

  return (
    <div>
      <div className="box-container">
        <Box title="You" item={userselect} result={result} />
        <Box title="Computer" item={computerselect} result={result} />
      </div>
      <div className="btn">
        <span>
          <FontAwesomeIcon
            icon={faHandScissors}
            onClick={() => play("scissors")}
          />
        </span>
        <span>
          <FontAwesomeIcon icon={faHandBackFist} onClick={() => play("rock")} />
        </span>
        <span>
          <FontAwesomeIcon icon={faHand} onClick={() => play("paper")} />
        </span>
      </div>
      <div className="ui">
        <h1>{uiresult}</h1>
      </div>
    </div>
  );
}

export default App;
