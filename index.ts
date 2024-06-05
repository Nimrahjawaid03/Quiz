#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bold.yellow("\t﹑++++++++++++++++++++++$$$$$$$$$$$$$$$$$$$$$+++++++++++++++++++++++\n")
);
console.log(chalk.bold.italic.green("\t\t WELCOME TO ") + chalk.bold("NMJ QUIZ System") + chalk.bold.italic.greenBright("\n"));
console.log(
  chalk.bold.yellow("\t﹑++++++++++++++++++++++$$$$$$$$$$$$$$$$$$$$$+++++++++++++++++++++++\n")
);

console.log(chalk.bold.blue("\tHow to play:"));
console.log("\tChoose one option for each question from dropdown");
console.log("\tTotal 6 questions");
console.log("\tGive at least 3 correct answers to win!\n");

let correct = 0;
let wrong = 0;

async function startQuiz() {
  const q1 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("Which programming language is known as the backbone of web development?\n"),
      type: "list",
      choices: ["a) Python", "b) JavaScript", "c) Java", "d) C++"],
    },
  ]);

  if (q1.question === "b) JavaScript") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  const q2 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("What does SQL stand for?\n"),
      type: "list",
      choices: [
        "a) Structured Query Language",
        "b) Simple Query Language",
        "c) Standard Query Language",
        "d) Sequential Query Language",
      ],
    },
  ]);

  if (q2.question === "a) Structured Query Language") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  const q3 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("Which of the following is a version control system?\n"),
      type: "list",
      choices: [
        "a) Git",
        "b) Node.js",
        "c) Docker",
        "d) Jenkins",
      ],
    },
  ]);

  if (q3.question === "a) Git") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  const q4 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("What does HTML stand for?\n"),
      type: "list",
      choices: [
        "a) Hyper Text Markup Language",
        "b) High Text Markup Language",
        "c) Hyper Tabular Markup Language",
        "d) None of these",
      ],
    },
  ]);

  if (q4.question === "a) Hyper Text Markup Language") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  const q5 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("Which programming language is primarily used for Android app development?\n"),
      type: "list",
      choices: [
        "a) Swift",
        "b) Kotlin",
        "c) Ruby",
        "d) Go",
      ],
    },
  ]);

  if (q5.question === "b) Kotlin") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  const q6 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("Which of the following is not a programming language?\n"),
      type: "list",
      choices: [
        "a) Python",
        "b) CSS",
        "c) HTML",
        "d) Java",
      ],
    },
  ]);

  if (q6.question === "b) CSS") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  if (correct >= 3) {
    console.log(
      chalk.bold.yellow("\t﹑++++++++++++++++++++++$$$$$$$$$$$$$$$$$$$$$+++++++++++++++++++++++\n")
    );
    console.log(chalk.bold.italic.green("\t\t CONGRATULATIONS! YOU WON!\n"));
    console.log(
      chalk.bold.yellow("\t﹑++++++++++++++++++++++$$$$$$$$$$$$$$$$$$$$$+++++++++++++++++++++++\n")
    );
  } else {
    console.log(chalk.bold.red("\n\t YOU LOSE! TRY AGAIN"));
  }
}

startQuiz();
