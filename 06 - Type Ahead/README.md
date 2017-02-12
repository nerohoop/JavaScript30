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

JavaScript is single thread. Typically, it's in the same queue as painting, updating styles. The Promise object is used for asynchronous computations. A Promise represents a value which may be available now, or in the future, or never. All promise instances get a then method which allows you to react to the promise. The first then callback receives the result given to it by the resolve() call.
``` JavaScript
  promise.then(function(result) {
    // Succeed
  }, function(err) {
    // Fail
  });
```
