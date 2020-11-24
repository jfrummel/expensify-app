const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("this is my resolved data");
        reject("Something went wrong");
    }, 5000);

});

promise.then((data) => console.log(data))
    .catch((error) => console.log(error));