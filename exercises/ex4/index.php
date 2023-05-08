<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"
            integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
            crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
<?php 
  if( $_GET['score'] > $_GET['highscore'] ) {
    echo "congratulations " . $_GET['name'] . " you have won the game.";
    echo "the ". $_GET['color'] . " Nokia 3310 will be delivered to you on " . $_GET['address'] . " in 3-5 business days";
    echo "if you want to play again press the link below";
  } else {
    echo "You can't order this phone your score is too low"; 
    echo "Your score: " . $_GET['score'] . "\nhigh score to beat: " . $_GET['highscore'];
    echo "try again to return to the game press the link below";
  }
?>
<a href="students/2022-2023/web1/dev_23/exercises/ex4/edit.html">Back to the game</a>
</body>
</html>