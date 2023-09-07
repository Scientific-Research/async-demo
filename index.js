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

// const getRepositories = (username) => {
//   return ["repo1", "repo2", "repo3"];
// };

// 1. convert this function to an Asynchronous function:

const repo = ["repo1", "repo", "repo3"];
const getRepositories = (username, callback) => {
  setTimeout(() => {
    console.log("----------------------------------------");
    console.log("Reading repositories from Github...");
    callback({
      username: username,
      repo: ["repo1", "repo", "repo3"],
    });
  }, 2000);
};
console.log("Before...");
getRepositories("Max", (repo) => {
  console.log("Repo", repo);
});
console.log("After...");
