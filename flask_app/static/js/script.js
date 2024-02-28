let data = fetch("https://api.github.com/users/steigs181")
    .then(response => response.json() )
    .then(coderData => console.log(coderData) )
    .catch(err => console.log(err) )