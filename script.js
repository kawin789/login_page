document.addEventListener("DOMContentLoaded", function() {
    var regform = document.getElementById("regform");
    if (regform) {
        regform.addEventListener("submit", function(e) {
            e.preventDefault();
            var name = document.getElementById("name").value.trim();
            var mail = document.getElementById("mail").value.trim();
            var password = document.getElementById("password").value;
            var conpassword = document.getElementById("conpassword").value;
            if (!name || !mail || !password || !conpassword) {
                alert("Please fill all fields.");
                return;
            }
         
            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }
            if (password !== conpassword) {
                alert("Passwords do not match.");
                return;
            }
            var user = { name: name, mail: mail, password: password };
            localStorage.setItem("user_" + mail, JSON.stringify(user));
            alert("Registration successful. Please login.");
            window.location.href = "login.html";
        });
    }

    var loginform = document.getElementById("loginform");
    if (loginform) {
        loginform.addEventListener("submit", function(e) {
            e.preventDefault();
            var mail = document.getElementById("loginmail").value.trim();
            var password = document.getElementById("loginpassword").value;
            var userData = localStorage.getItem("user_" + mail);
            if (userData) {
                var user = JSON.parse(userData);
                if (user.password === password) {
                    alert("Login successful!");
                    return;
                }
            }
            alert("Invalid email or password.");
        });
    }

    var forgotform = document.getElementById("forgotform");
    if (forgotform) {
        forgotform.addEventListener("submit", function(e) {
            e.preventDefault();
            var mail = document.getElementById("forgotmail").value.trim();
            var userData = localStorage.getItem("user_" + mail);
            if (userData) {
                alert("Password reset link sent to your email.");
            } else {
                alert("Email not found.");
            }
        });
    }
});