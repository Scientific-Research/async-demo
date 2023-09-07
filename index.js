const getUser = (id, callback) => {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({
      id: id,
      gitHubUsername: "Maxi",
    });
  }, 2000);
};
console.log("Before...");
getUser(1, (user) => {
  console.log("User", user);
});
console.log("After...");

// Callbacks
// Promises
// Async/await
