<?php
session_start();
if(!isset($_SESSION['lietotajvards']))
{ header("location:index.php"); }

include("config.php");

?>
<?php
include("template_class.php")
?>
    <?php
    if(isset($_POST["iziet"])){
        session_destroy();
        header("Location:index.php");
    }

    ?>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <script type="text/javascript" scr="jquery-1.11.3.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="noformejums.css" />
    <link rel="SHORTCUT ICON" href="favicon.ico"/>
    <script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>



    <title>Sākums</title>
</head>
<body>
<?php
$template = new template_Class();
$template->showMenu();
?>
<div id = "vidus">

    <?php 
    echo  "<span class='pazinojums' >Esiet sveicināti {$_SESSION['lietotajvards']}!</span><br/>";?>
    <form action = "sakums.php" method = "post">
        <button type="submit" name="iziet" class="btn btn-default"><b>Atslēgties</b></button>

    </form>



</div>

</body>
</html>