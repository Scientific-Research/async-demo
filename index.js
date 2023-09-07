const getUser = (id, firstName) => {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({
        id: id,
        gitHubUsername: firstName,
      });
    }, 2000);
  });
};
/////////////////////////////////////////////////////////
const repo = ["repo1", "repo2", "repo3"];
const getRepositories = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("---------------------------------------------------");
      console.log("Reading repositories from Github...");
      resolve({
        username: username,
        // repo: ["repo1", "repo2", "repo3"],
        repositories: repo,
      });
    }, 2000);
  });
};
/////////////////////////////////////////////////////////
const getCommits = (repo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
};
/////////////////////////////////////////////////////////
console.log("Before...");
const p = getUser(1, "Max");
p.then((user) => console.log(user));

// getUser(1, (user) => {
//   console.log("User", user);
//   getRepositories(user.gitHubUsername, (repos) => {
//     console.log("Repos", repos);
//   });
// });
console.log("After...");
/////////////////////////////////////////////////////////
