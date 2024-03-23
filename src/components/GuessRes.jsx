import React from "react";

function GuessRes({ ranNum, num }) {
  let result;
  if (num > ranNum) {
    result = "higher";
  } else if (num < ranNum) {
    result = "lower";
  } else if (num == ranNum) {
    result = "correct";
  } else {
    result = "enter valid input";
  }
  return <div>You Guessed: {result}</div>;
}

export default GuessRes;
