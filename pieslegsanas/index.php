<?php
include("config.php");
session_start();
session_destroy();
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
	<form method = "post" action = "index.php">
		<table>
		<tr><td class = "t_tabula">Lietotājvārds:</td><td><input type = "text"  name = "lietotajvards"></td></tr>
		<tr><td class = "t_tabula">Parole:</td><td><input type = "password" name = "parole"/></td></tr>
		<tr><td colspan = "2" class = "t_tabula"><input type = "submit" name = "pieslegties" value = "Pieslēgties"/></td></tr>
		<tr><td colspan = "2" class = "t_tabula"><a href = "register.php" />Reģistrēties</a></td></tr>
		</table>
	</form>
	<?php
		if(isset($_POST["pieslegties"])){
			$lietotajvards = mysql_real_escape_string($_POST["lietotajvards"]);
			$parole = md5(mysql_real_escape_string($_POST["parole"]));
			$i = 0;
			$result = mysql_query("SELECT lietotajvards, parole FROM lietotaji WHERE lietotajvards = '$lietotajvards' AND parole = '$parole'");
			while(mysql_fetch_array($result)){
				$i++;
			}
			if($i == 0) {echo "Nepareizs lietotājvārds vai parole";}
			if($i == 1) { 
				header("location:sakums.php");
				session_start();
				$_SESSION['lietotajvards'] = $lietotajvards;
			}
		}
	
	?>
	</div>
</body>
</html>