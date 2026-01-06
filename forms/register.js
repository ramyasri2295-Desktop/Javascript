document.getElementById("registerform").addEventListener("submit", function (e) {
    e.preventDefault();



    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmpassword = document.getElementById("confirmpassword").value.trim();


    

    let usernamepattern = /^[A-Z][a-z]{3,15}$/;
    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordpattern = /^(?=.*\d).{6,}$/;



    if (!usernamepattern.test(username)) {
        error.textcontent = "Invalid Username";
        return;
    }


    if (!emailpattern.test(email)) {
        error.textcontent = "Invalid email";
        return;
    }


    if (passwordpattern.test(password)) {
        error.textcontent = "Invalid password";
        return;
    }


    if (password !== Confirmpassword) {
        error.textcontent = "Password do not match";
        return;
    }

    success.textContent = "Registration successful!";

});