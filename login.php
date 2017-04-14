<html>
<head>
    <title>Log In</title>
    <style>
        input[type=text], input[type=password] {
            width: 230px;
        }
    </style>
</head>
<body>
<div class="content">
    <h2>Log In</h2>
    <form action="login.php" method="POST" style="margin:0px auto;display:table;">
        <label>
            <p>Username / E-Mail</p>
            <input name="login" type="text">
        </label><br>
        <label>
            <p>Password</p>
            <input name="password" type="password">
        </label><br>
        <label>
            <p>
                <input name="remember_me" type="checkbox"> Remember Me
            </p>
        </label>
        <div clear=""></div>
        <button style="width:150px;" name="action_login">Log In</button>
    </form>
    <p>
    </p>
    <p>Don't have an account ?</p>
    <a class="button" href="register.php">Register</a>
    <p></p>
    <p>
    </p>
    <p>Forgot Your Password ?</p>
    <a class="button" href="reset.php">Reset Password</a>
    <p></p>
</div>


</body>
</html>
