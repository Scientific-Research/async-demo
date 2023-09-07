const getUser = (id) => {
  setTimeout(() => {
    console.log("Reading a user from a database...", id);
    return {
      id: id,
      gitHubUsername: "Maxi",
    };
  }, 2000);
  return 1;
};
console.log("Before...");
const user = getUser(1);
console.log(user);
console.log("After...");

// Callbacks
// Promises
// Async/await
