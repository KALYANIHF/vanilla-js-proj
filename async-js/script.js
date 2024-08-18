// settime out function
const startTimeOut = document.querySelector(".start-timeout");
const endTimeOut = document.querySelector(".end-timeout");

// function startDelay() {
//   return setTimeout(() => {
//     console.log("Hello world!");
//   }, 4000);
// }

// const startDelay_id = startDelay();

// function endDelay(delay_id) {
//   clearTimeout(delay_id);
// }

// endTimeOut.addEventListener("click", () => {
//   endDelay(startDelay_id);
// });
// let intervelId;
// function startInterval() {
//   return setInterval(changeBg, 1000);
// }
// function changeBg() {
//   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = randomColor;
// }

// startTimeOut.addEventListener("click", () => {
//   intervelId = startInterval();
// });
// endTimeOut.addEventListener("click", () => {
//   stopInterval(intervelId);
// });

// function stopInterval(id) {
//   clearInterval(id);
// }

// understanding of the callbacks

const posts = [
  {
    title: "Post 1",
    description: "This is the main post of the blog",
    author: "Souvik Mondal",
  },
  {
    title: "Post 2",
    description: "This is the second post",
    author: "John Doe",
  },
  {
    title: "Post 3",
    description: "this is the third post",
    author: "Rahun shit",
  },
];

const post = {
  title: "Post 4",
  description: "this is the fouth post",
  author: "Random Person",
};

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<div class="post">title: ${post.title} - description: ${post.description} - author: ${post.author}</div>`;
      document.querySelector(".posts").appendChild(div);
    });
  }, 2000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject("The process is not resolved");
      }
    }, 2000);
  });
}

createPost(post)
  .then(getPosts)
  .catch((error) => {
    console.log(error);
  });
