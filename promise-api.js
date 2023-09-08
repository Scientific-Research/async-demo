const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

const r = Promise.reject(("reason for rejection..."));
r.catch((error) => console.log(error));
