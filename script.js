// const textInput = document.getElementById("text-input");
// const checkButton = document.getElementById("check-btn");
// const result = document.getElementById("result");
// const hiddenContainer = document.getElementById("hidden-container");

// const checkBtn = (event) => {
// 	event.preventDefault();
//     hiddenContainer.style.display = "block";
// };

// const textParser = (event) => {
// 	result.innerText = event.target.value;
// };

// const palindromCheckerFuntion = (textParser) => {

// };

// const resultsDiv = (textParser) => {
// 	const displayDiv = document.createElement("p");
// 	const text = document.createTextNode(textParser);
//     result.appendChild(displayDiv);
//     displayDiv.appendChild(text)
// };

// checkButton.addEventListener("click", checkBtn);
// textInput.addEventListener("input", textParser);

const arrayStr = ["racecar"];

const palindromChecker = (str) => {
	let palindromEl = "";
	for (let i = 0; i < str.length; i++) {
		for (let j = str.length - 1; j > -1; j--) {
			if (str[i] === str[j]) {
				return true
			}
		}
	}
};

console.log(palindromChecker(arrayStr));
