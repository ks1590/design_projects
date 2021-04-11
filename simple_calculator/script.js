function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  return document.getElementById("history-value").innerText = num;
}

function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  }
  else {
    document.getElementById("output-value").innerText = getFormattedNumber(num)
  }
}

function getFormattedNumber(num) {
  if (num == "") {
    return ""
  }
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

let operator = document.getElementsByClassName("operator")
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    }
    else if (this.id == "backspace") {
      let output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output)
      }
    }
    else {
      let output = getOutput();
      let history = getHistory();
      if (output == "" && history !== "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || histroy != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          let result = eval(history);
          printOutput(result);
          printHistory("");
        }
        else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  })

}


let number = document.getElementsByClassName("number")
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      console.log(this)
      printOutput(output);
    }
  });
}

console.log(Number(9.1234))


// function printOutput(num) {
//   let n = Number(num)
//   let value = n.toLocaleString('en-IN')
//   return value
// }

// let number = document.getElementsByClassName("number")
// console.log(number)
// for (let i = 0; i < number.length; i++) {
//   number[i].addEventListener('click', () => {
//     document.getElementById("output-value").innerText = number[i].innerText
    // if (document.getElementById("output-value").innerText != "") {
    //   document.getElementById("output-value").innerText = number[i].innerText
    // }
//   })
// }

// let clearBtn = document.getElementById("clear")
// clearBtn.addEventListener('click', () => {
//   document.getElementById("output-value").innerText = 0
// })