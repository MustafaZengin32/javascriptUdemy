//https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(json => console.log(json))
  .catch(error => console.error('Fetch error:', error));

  /*
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  */