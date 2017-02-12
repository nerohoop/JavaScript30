#Exercise 6: Type Ahead
Finish Date: Feb 6, 2017

## Problem

1. We're given an endpoint which returns a list of cities.
2. User can use the search bar to filter the list by city name or state.

## Learning Notes

Firstly, we need to retrieve the JSON file and store it locally.
There are couple of methods to request a file from the server.

### XMLHttpRequest

This object allows you to send a request to a server
  ``` JavaScript
    var request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      cities = request.response;
    };
  ```

### Fetch

The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
It returns a promise that resolves to the Response.
  ``` JavaScript
    const cities = [];
    fetch(endpoint)
      .then(blob => blob.json()) // This returns another promise
      .then(data => cities.push(...data));
  ```

### Promise

JavaScript is single thread. Typically, it's in the same queue as painting, updating styles. The Promise object is used for asynchronous computations. A Promise represents a value which may be available now, or in the future, or never. All promise instances get a then method which allows you to react to the promise. then() takes two arguments, a callback for success case, another for failure case.
You can chain thens together to transform values or run additional async actions one after another.
``` JavaScript
  promise.then(function(result) {
    // Succeed
  }, function(err) {
    // Fail
  });
```

Now we have all the data we need by sending a request to the server. Next we need to detect user input in search bar.
We need to add two event listener to detect text change.
  ```JavaScript
    textField.addEventListener('change', didChangeText);
    textField.addEventListener('keyup', didChangeText);
  ```

### Regular Expression

When user types anything in the search bar, we need to update the list accordingly. Regular expressions are patterns used to match character combinations in strings. The search patter can be used for text search and text replace operation. When you search for data in a text, you can use this search pattern to describe what you are searching for.

  ```JavaScript
    var re = /ab + c/;
    var re = new RegExp("ab + c");

    var str = "Visit W3School";
    var re = new RegExp("w3school", "i");
    var result = str.search(re);
  ```
