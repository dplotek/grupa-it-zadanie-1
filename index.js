const EVEN_COLUMN = "even";
const GENERATE_BUTTON = "generate";
const ODD_COLUMN = "odd";

const evenColumn = document.getElementById(EVEN_COLUMN);
const generateButton = document.getElementById(GENERATE_BUTTON);
const oddColumn = document.getElementById(ODD_COLUMN);

const evenNumbersArray= [];
const oddNumbersArray = [];

const numberOfRandomNumbers = 20;
const minRange = 1;
const maxRange = 100;

const cleanArraysAndColumns = () => {
    oddNumbersArray.length = 0;
    evenNumbersArray.length = 0;
    oddColumn.textContent = '';
    evenColumn.textContent = '';
}

const sortNumbersEvenAndOddNumbers = (number) => {
    if(number % 2 === 0){
        evenNumbersArray.push(number);
    } else {
        oddNumbersArray.push(number);
    }
}

const sortFromMinToMax =(a,b)=>{
    return a - b;
}

const displayNumbers = (array, column) => {
    array.forEach(item =>{
        const row = document.createElement("div");
        row.textContent = item;
        row.classList.add("row");
        column.appendChild(row);
    })
}

const generateRandomNumbers = (number) => {
    cleanArraysAndColumns();
    for(let i = 0; i <number; i++){
        const randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
        sortNumbersEvenAndOddNumbers(randomNumber);
    }
    oddNumbersArray.sort(sortFromMinToMax);
    evenNumbersArray.sort(sortFromMinToMax);
    displayNumbers(oddNumbersArray, oddColumn);
    displayNumbers(evenNumbersArray, evenColumn);
}

generateButton.addEventListener("click", () => generateRandomNumbers(numberOfRandomNumbers));