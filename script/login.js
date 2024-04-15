document.getElementById('login-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    var userName = document.getElementById('username').value;
    var password = document.getElementById('Password').value;
     
     var users = JSON.parse(localStorage.getItem('users')) || {};
     

    if(users.hasOwnProperty(userName) && users[userName] === password){
        localStorage.setItem('loggedUser',userName) 
        window.location.href = 'home.html';
    }else{
        document.getElementById('error-message').innerText = 'Invalid username or password.';
    }
});
console.log(users);