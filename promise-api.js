// const p = Promise.resolve({ id: 1 });
// p.then((result) => console.log(result));

// const r = Promise.reject(("reason for rejection..."));
// r.catch((error) => console.log(error));

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1 ...");
    resolve(16);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2 ...");
    resolve(25);
  }, 2000);
});

Promise.all([p1, p2]).then((result) => console.log(result));
