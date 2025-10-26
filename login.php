<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Safe Connect</title>
    <link rel="stylesheet" href="styles/login_styles.css">
    <script src="scripts/login_scripts.js" defer></script>
</head>
<body>
    <div class="container">
        <div class="form-box active" id="login-form">
            <form action="" method="POST" autocomplete="on">
                <h2>Login</h2>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit" name="Login">Login</button>
                <p>Don't have an account? <a href="#" onclick="showForm('registe-form')">Register</a></p>
            </form>
        </div>

        <div class="form-box" id="registe-form" >
            <form action="" method="POST" autocomplete="on">
                <h2>Register</h2>
                <input type="text" name="name" placeholder="Name" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit" name="register">Register</button>
                <p>Already have an account? <a href="#" onclick="showForm('login-form')">Login</a></p>
            </form>
        </div>
    </div>
</body>
</html>