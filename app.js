let currentIndex = 0;
let users = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        users = data;
        displayUser(users[currentIndex]); // Display the first user
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('user-info').innerHTML = '<p>Failed to fetch user data.</p>';
    });


function displayUser(user) {
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = `
                <div class="user-card">
                    <h2>${user.name} (${user.username})</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                </div>
            `;
}


document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < users.length) {
        displayUser(users[currentIndex]);
    }


    if (currentIndex === users.length - 1) {
        document.getElementById('next-btn').disabled = true;
    }
});
