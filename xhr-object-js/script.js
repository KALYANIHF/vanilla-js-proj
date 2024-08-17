const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.open("GET", "https://api.github.com/users/KALYANIHF/repos", true);

xhr.onloadstart = function () {
  console.log("Request started");
};

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    data.forEach((item) => {
      const li = document.createElement("li");
      li.className = "list-item";
      const textNode1 = document.createTextNode(
        ` ${item.description} - created on ${item.created_at}`
      );
      const strong = document.createElement("strong");
      const repoName = document.createTextNode(`${item.name}`);
      strong.appendChild(repoName);
      li.appendChild(strong);
      li.appendChild(textNode1);
      document.querySelector("#repo-list").appendChild(li);
      console.log(li);
    });
  }
};

xhr.onerror = function () {
  console.log("Request failed");
};

xhr.send();
