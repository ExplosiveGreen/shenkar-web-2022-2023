<?php
include 'db.php';

$query = "SELECT * FROM tbl_23_books where id = '" . $_GET['idBook'] . "'";
$result = mysqli_query($connection, $query);
$row = mysqli_fetch_array($result);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Information</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"
        integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <link type="text/css" rel="stylesheet" href="css/style.css">
</head>

<body>
    <div>
        <?php
        echo "<h1>" . $row['name'] . "</h1>";
        echo "<h2 bs-category='" . $row['category'] . "'>" . $row['category'] . "</h2>";
        echo "<img src='" . $row['image1'] . "' alt='" . $row['image1'] . "'>";
        echo "<img src='" . $row['image2'] . "' alt='" . $row['image2'] . "'>";
        ?>
    </div>
    <script src="js/script2.js"></script>
</body>

</html>
<?php
//close DB connection
mysqli_close($connection);
?>