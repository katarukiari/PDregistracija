<?php
include("config.php");

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
	<form action = "register.php" method = "post" enctype="multipart/form-data">
		<table>
		<tr><td class = "t_tabula">Vārds:</td><td><input type = "text"  name = "vards"></td></tr>
		<tr><td class = "t_tabula">Uzvārds:</td><td><input type = "text"  name = "uzvards"></td></tr>
		<tr><td class = "t_tabula">Lietotājvārds:</td><td><input type = "text"  name = "lietotajvards"></td></tr>
		<tr><td class = "t_tabula">Parole:</td><td><input type = "password" name = "parole1"/></td></tr>
		<tr><td class = "t_tabula">Atkārtot paroli:</td><td><input type = "password" name = "parole2"/></td></tr>
		<tr><td class = "t_tabula">Epasts:</td><td><input type = "text" name = "epasts"/></td></tr>
		<tr><td colspan = "2" class = "t_tabula"><input type = "submit" value = "Reģistrēties" name = "saglabat"></a></td></tr>
		</table>
	</form>
	</div>
	<?php
		if(isset($_POST["saglabat"])){
			//pārbaude, vai paroles sakrīt
			if($_POST['parole1'] == $_POST['parole2']){
				$vards =  mysql_real_escape_string($_POST["vards"]); 
				$uzvards =  mysql_real_escape_string($_POST["uzvards"]); 
				$lietotajvards = mysql_real_escape_string($_POST["lietotajvards"]); 
				$epasts = mysql_real_escape_string($_POST["epasts"]); 
				$parole = md5(mysql_real_escape_string($_POST["parole1"])); 
				//infromācijas saglabāšana datu bāzē
				mysql_query("INSERT INTO lietotaji (vards, uzvards, lietotajvards, parole, epasts)
				VALUES ('$vards', '$uzvards', '$lietotajvards', '$parole', '$epasts')");
				
			}// paroļu if beigas
		else {echo "Paroles nesakrīt, lūdzu ievadiet nepieciešamo informāciju vēlreiz!";}
		}//if beigas
	
	?>
	
</body>
</html>