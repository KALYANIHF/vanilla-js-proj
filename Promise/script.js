// a promise is an object that represents a eventual completion or failure of an asynchronous operation

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("this task is completed");
    const user = {
      name: "souvik",
      age: 27,
    };
    let err = false;
    if (!err) {
      resolve(user);
    } else {
      reject("Task failed");
    }
  }, 1000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("this block will run no matter what");
  });

console.log("this code is running from global scope");
