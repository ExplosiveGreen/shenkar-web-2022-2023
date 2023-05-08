<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="php file for except get variable for ex4/edit.html">
  <link rel="stylesheet" href="css/style.css">
  <title>Document</title>
</head>

<body>
  <div id="wrapper">
    <h1>
      <?php
      if ($_GET['score'] > $_GET['highscore']) {
        echo "Congratulations " . $_GET['fullName'] . " you have won.";
      } else {
        echo "You Loose, You can't order this phone";
      }
      ?>
    </h1>
    <h2>
      <?php
      if ($_GET['score'] > $_GET['highscore']) {
        echo "The " . $_GET['color'] . " Nokia 3310 will be delivered to you on " . $_GET['address'] . " in 3-5 business days";
      } else {
        echo "Your score: " . $_GET['score'] . ", high score to beat: " . $_GET['highscore'];
      }
      ?>
    </h2>
    <h3>
      <?php
      if ($_GET['score'] > $_GET['highscore']) {
        echo "if you want to play again press the link below";
      } else {
        echo "try again to return to the game press the link below";
      }
      ?>
    </h3>
    <a href="edit.html">Back to the game</a>
  </div>
</body>

</html>