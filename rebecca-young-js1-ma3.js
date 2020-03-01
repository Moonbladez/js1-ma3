//1.Convert the function below to an arrow function:
const subtract = (a, b) => {
	console.log(`Question 1 answer is ${a - b}`);
};

subtract(10, 5);

//2.Make a call to the URL below, pass the JSON it returns to a function and inside that function loop through the results and log each game's name. In the catch method of your code, redirect to error.html if there is an error.
const genre = "sports";
fetch(`https://api.rawg.io/api/games?genres=${genre}`)
	.then(response => {
		response.json().then(data => {
			const results = data.results;
			for (let i = 0; i < results.length; i++) {
				console.log(results[i].name);
			}
		});
	})

	.catch(function (error) {
		document.location.href = "/error.html";
	});

//3. Replace the word cats with the word giraffes in the following sentence
const sentence = "these cats are outrageous";
const result = sentence.replace("cats", "giraffes");
console.log(`Question 3: ${result}`);

//4. Given the URL below, write code that checks if there is a userId parameter in the query string. there is no userID parameter, redirect the browser to third.html. If there is a userID parameter and its value is less than 10, redirect to first.html. If there is a userID parameter and its value is 10 or greater, redirect to second.html.

const url = "https://my.site.com?userId=7";
const searchParams = "userId";
if (!url.includes(searchParams)) {
	document.location.href = "/third.html";
} else {
	const userIdValue = url.split("=").pop();
	if (userIdValue < 10) {
		console.log("less than");
		//removed to comments so I was able to see the rest of the code.
		// document.location.href = "/first.html";
	} else {
		document.location.href = "/second.html";
	}
}

//5. Write code that removes the button, and only the button, from its parent element in the HTML below
const button = document.querySelector(".container .btn");
button.style.display = "none";

//6.Create an li element with a text value of Parrots and a class of parrots. Add the new item as the second item in the ul below (add it after Cows).
const addNewListItem = () => {
	const newLi = document.createElement("li");
	newLi.className = "parrots";
	const liContent = document.createTextNode("Parrots");
	newLi.appendChild(liContent);
	const list = document.querySelector(".animals");
	list.insertBefore(newLi, list.childNodes[2]);
};

addNewListItem();

// 7.Make a call to the URL below and pass the JSON it returns to a function. Inside that function select the div from the HTML below and assign the rating property from the JSON object as it's text value. In the catch method, log the error that may be returned.
const addRating = () => {
	const url = "https://api.rawg.io/api/games/3801";
	fetch(url)
		.then(response => {
			return response.json();
		})
		.then(data => {
			const rating = data.rating;
			document.querySelector(".rating").innerHTML = rating;
		})
		.catch(err => {
			console.log(err);
		});
};

addRating();