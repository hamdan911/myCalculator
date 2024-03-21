#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const calculator = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Choose your Operator",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (calculator.operator === "addition") {
    console.log(chalk.green(`${calculator.firstNumber} + ${calculator.secondNumber} = ${calculator.firstNumber + calculator.secondNumber}`));
}
else if (calculator.operator === "subtraction") {
    console.log(chalk.red(`${calculator.firstNumber} - ${calculator.secondNumber} = ${calculator.firstNumber - calculator.secondNumber}`));
}
else if (calculator.operator === "multiplication") {
    console.log(chalk.blue(`${calculator.firstNumber} * ${calculator.secondNumber} = ${calculator.firstNumber * calculator.secondNumber}`));
}
else if (calculator.operator === "division") {
    console.log(chalk.yellow(`${calculator.firstNumber} / ${calculator.secondNumber} = ${calculator.firstNumber / calculator.secondNumber}`));
}
console.log(`Thanks for using. Code Written by ${chalk.cyan("Muhammad Hamdan Bhatti")}`);
