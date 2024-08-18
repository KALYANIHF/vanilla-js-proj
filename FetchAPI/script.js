// fetch("./assets/books.json")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://randomuser.me/api/")
//   .then((res) => res.json())
//   .then((data) => console.log(data.results[0]));

// working with json place holder for testing the fetch api
const post = {
  title: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
  body: "Lorem ipsum dolor sit amet, consectet",
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(post),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    );
  })
  .then((data) => console.log(data));
