document.querySelector("button").addEventListener("click", getJoke, false);

function getJoke() {
  console.log("get Joke function called");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const jokeData = JSON.parse(xhr.responseText);
      const jokeContainer = document.getElementById("joke");
      const jokeImage = document.createElement("img");
      jokeImage.src = jokeData.icon_url;
      const jokeId = document.createElement("p");
      const textnode = document.createTextNode(jokeData.id);
      jokeId.appendChild(textnode);
      const jokeValue = document.createElement("h4");
      const jokeValueText = document.createTextNode(jokeData.value);
      jokeValue.appendChild(jokeValueText);
      jokeContainer.innerHTML = "";
      jokeContainer.appendChild(jokeImage);
      jokeContainer.appendChild(jokeId);
      jokeContainer.appendChild(jokeValue);
    }
  };
  xhr.send();
}

document.querySelector("from").addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = document.querySelector("#search-term").value;
  fetch(
    `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=YOUR_API_KEY&limit=10`
  ).then((response) => response.json());
});
