<?php
include("config.php");

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script type="text/javascript" scr="jquery-1.11.3.js"></script>
<link rel="stylesheet" type="text/css" href="noformejums.css" />
<link rel="SHORTCUT ICON" href="bildes/favicon.ico"/>


<title>Paraugs</title>
</head>
<div id = "vidus">
	<form method = "post" action = "index.php">
		<div class="container-fluid" style="padding-top: 10%">
			<div class="intro">
				<div class="col-md-4" style="border:none">
					<p></p>
				</div>
				<div class="col-md-4" style="background-color:black;padding: 20px;max-width:400px">

					<form role="form">
						<div class="form-group">
							<label for="usr"class="lb">Lietotājvārds:</label>
							<input type="text" name="lietotajvards" class="form-control" id="usr">
						</div>



						<div class="form-group">
							<label for="pwd"class="lb">Parole:</label>
							<input type="password" name="parole" class="form-control" id="parole1">
						</div>


						<button type="submit" name="pieslegties" class="btn btn-default"><b>Pieslēgties</b></button>
						<button type="button" class="btn btn-default pull-right"><a href="register.php"><b>Reģistrēties</b></button>
					</form>
					<br>
					<?php
					if(isset($_POST["pieslegties"])){
						$lietotajvards = mysql_real_escape_string($_POST["lietotajvards"]);
						$parole = md5(mysql_real_escape_string($_POST["parole"]));
						$i = 0;
						$result = mysql_query("SELECT lietotajvards, parole FROM lietotaji WHERE lietotajvards = '$lietotajvards' AND parole = '$parole'");
						while(mysql_fetch_array($result)){
							$i++;
						}
						if($i == 0) {echo '<span style="color:white;font-weight:bold;">Nepareizs lietotāja vārds vai parole!</span>';}
						if($i == 1) {
							header("location:sakums.php");
							session_start();
							$_SESSION['lietotajvards'] = $lietotajvards;
						}
					}

					?>

				</div>

	</form>


    <body>






    </body>
</html>
