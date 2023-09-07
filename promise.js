const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // ...
  setTimeout(() => {
    // after 2 seconds we have the value of 1 at the output!
    resolve(1);
  }, 2000);
  //   reject(new Error("message"));
});

p.then((result) => console.log("Result: ", result));
