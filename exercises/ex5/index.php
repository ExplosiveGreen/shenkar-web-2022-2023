<?php
    include 'db.php';
    
    $query  = "SELECT * FROM tbl_23_books" ;      
    $result = mysqli_query($connection , $query);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Book Store</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <link  type="text/css" rel="stylesheet" href="css/style.css">	 
</head>
<body>
    <div id='content'>
        <?php
        echo "<div class='d-flex flex-wrap flex-row justify-content-around gap-2'>";
        while($book = mysqli_fetch_assoc($result)) {
            echo "<a href = 'book.php?idBook=".$book['id']."' class = 'card card-width justify-content-center' bs-category='".$book['category']."'>";
            echo "<section class = 'card-body d-flex flex-column align-items-center'>";
            echo "<img class='card-image-top' src='".$book['image1']."' alt='".$book['image1']."'>";
            echo "<h5 class='card-title'>" . $book['name'] . "</h5>";
            echo "<h6 class='card-subtitle' bs-category='".$book['category']."'></h6>";
            echo "<img class='card-image-bottom' src='".$book['image2']."' alt='".$book['image2']."'>";
            echo "</section>";
            echo "</a>";
        }
        echo "</div>";
        ?>
        </div>
    </div>
    <?php
    mysqli_free_result($result);
    ?>
</body>
<script src="js/script.js"></script>
</html>
<?php
//close DB connection
mysqli_close($connection);
?>