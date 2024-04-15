document.getElementById('sign-up-form').addEventListener('submit',(event)=>{
     event.preventDefault();

     var userName = document.getElementById('username').value;
     var password = document.getElementById('Password').value;

      var users = JSON.parse(localStorage.getItem('users')) || {};
      if(users.hasOwnProperty(userName)){
        alert('user exist');
          return;

      } 
      users[userName] = password;

      localStorage.setItem('users',JSON.stringify(users));
      localStorage.setItem('loggedUser',userName) 
      window.location.href ='home.html'
})