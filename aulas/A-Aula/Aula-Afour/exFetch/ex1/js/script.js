fetch('https://jsonplaceholder.typicode.com/users/')
.then(response => response.json())
// .then(json => {console.log(json);})

.then(users => {
    const allUsers = document.getElementById("user-list");

    users.forEach(user => {
        const oneUser = document.createElement("li");
        oneUser.textContent = user.name + '(' + user.email + ')';
        allUsers.appendChild(oneUser);

    })
})


.catch(err => console.log(err));