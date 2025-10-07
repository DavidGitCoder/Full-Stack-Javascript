const promises = function () {
  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
  console.log(fetchPromise);

  //clean Promises calls
  fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json(); //return a Promise
    })
    .then((data) => {
      //data is the result from response.json()
      console.table(data);
      console.log(data[0].name);
    })
    .catch((error) => {
      console.log(`Something went wrong: ${error}`);
    });
  //not so clean way
  // fetchPromise.then((response) => {
  //   console.table(`Received response: ${response.status}`);
  //   const jsonPromise = response.json();
  //   jsonPromise.then((data) => {
  //     console.log(data);
  //     console.table(data);
  //     console.table(data[2].name);
  //   });
  // });

  console.log("Started request...");
};

// ASYNC and AWAIT
const asyncAwait = async function () {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    const data = await response.json();
    console.table(data);
  } catch (error) {
    console.log(`Could not get products: ${error}`);
  }
};
asyncAwait(); //returns a promise (use .then if necessary)
console.log("Processing request...");
console.log("please hold...");
