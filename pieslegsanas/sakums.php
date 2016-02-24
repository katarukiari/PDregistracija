<?php
include("config.php");
session_start();
if(!isset($_SESSION['lietotajvards']))
{ header("location:index.php"); }

?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="noformejums.css" />
<link rel="SHORTCUT ICON" href="favicon.ico"/>
<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>

<title>Sākums</title>
</head>
<body>
	<div id = "vidus">
		<?php 
			echo "Esi sveicināts: {$_SESSION['lietotajvards']}<br/>";?>
		<form action = "sakums.php" method = "post">
		<input type = "submit" name = "iziet" value = "Atslēgties"/>
		</form>
		<?php
			if(isset($_POST["iziet"])){
				session_destroy();
				header("Location:index.php");
			}
		
		?>
	</div>
</body>
</html>