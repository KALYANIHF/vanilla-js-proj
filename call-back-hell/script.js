// function getData(endPoint, cb) {
//   // create a xhr object
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", `./assets/${endPoint}`);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       cb(JSON.parse(xhr.responseText));
//     }
//   };
//   xhr.onerror = function () {
//     console.log("something went wrong");
//   };
//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000 + 1000));
// }

// // create a request on movie.json endoint
// getData("movies.json", (data) => {
//   console.log(data);
//   getData("movies.json", (data) => {
//     console.log(data);
//     getData("student.json", (data) => {
//       console.log(data);
//     });
//   });
// });

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Proces can not be resolved");
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000 + 1000));
  });
}

// getData("./assets/student.json", (data) => {
//   console.log(data);
//   getData("./assets/books.json", (data) => {
//     console.log(data);
//     getData("./assets/movies.json", (data) => {
//       console.log(data);
//     });
//   });
// });

// getData("./assets/student.json")
//   .then((students) => {
//     console.log(students);
//     return getData("./assets/movies.json");
//   })
//   .then((movies) => {
//     console.log(movies);
//     return getData("./assets/books.json");
//   })
//   .then((books) => {
//     console.log(books);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("this block run finished");
//   });

const student = getData("./assets/student.json");
const movies = getData("./assets/movies.json");
const books = getData("./assets/books.json");

Promise.all([student, movies, books]).then((data) => {
  console.log(data);
});
