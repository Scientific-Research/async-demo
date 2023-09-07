const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // ...
  setTimeout(() => {
    // after 2 seconds we have the value of 1 at the output!
    // resolve(1); // pending => resolved , fulfilled
    reject(new Error("message")); // pending => rejected
  }, 2000);
});

p.then((result) => console.log("Result: ", result)).catch((err) =>
  console.log("ERORR", err.message)
);
