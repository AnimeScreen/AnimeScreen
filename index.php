<html>
<head>
    <title>Anime Social Network </title>
    <meta name="Description" content="An anime social network website">
    <meta name="Keywords" content="anime,social,network,list">
    <style>
        body {
            margin: 0;
        }

        #top {

            background-color: gray;
            padding: 10px 10% 10px 10%;

        }

        ul, li, h1 {
            display: inline;
        }

        .header_right {
            float: right;
        }

        body {
            font-family: "Segoe UI", Tahoma, sans-serif;
            font-size: 14px;
            background: #dedede;
        }

        #top {
            background: #6A1B9A;
            color: #AA00FF;
        }

        #top a {
            color: #fff;
            text-decoration: none;
        }

        #top a:hover {
            color: #D500F9;
        }

        form {
            color: #9C27B0;
        }</style>
</head>
<body>
<div id="top"><h1>Anime Screen</h1>
    <ul class="header_right">

        <li><a href="login.php">Login</a></li>
        <li><a href="register.php">Register</a></li>
    </ul>
</div>
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
<style>
    input[type=text], input[type=password] {
        width: 230px;
    }
</style>


</body>
</html>
