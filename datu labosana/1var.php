<?php
include("config.php");

session_start();
if(!isset($_SESSION['lietotajvards']))
{ header("location:index.php"); }

function priek(){

	$result = mysql_query("SELECT DISTINCT prieksmeti.prieksmets FROM prieksmeti") or die(mysql_error());
	while($row = mysql_fetch_array( $result )) 
		{
			$prieksmets = $row['prieksmets'];
			echo" <option value = '$prieksmets'>{$prieksmets}</option> ";
		}
}
?>
<?php
include("template_class.php")
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

	<script type="text/javascript" scr="jquery-1.11.3.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="noformejums.css" />
<link rel="SHORTCUT ICON" href="bildes/favicon.ico"/>


<title>1. daļa - infromācijas atspoguļošana, izmantojot "select tag"</title>
</head>

    <body>
	<?php
	$template = new template_Class();
	$template->showMenu();
	?>
	<div class = "sadala">	
		<form action = "1var.php" method = "post">
			<div class = "virsraksti">Vienkāršs select tag:</div>
			<!-- PIRMAIS SELECT TAG-->
				<select name = "prieksmeti">
					<option value = "Interneta pamati">Interneta pamati</option>
					<option value = "Tiesību pamati">Tiesību pamati</option>
					<option value = "Programmēšana">Programmēšana</option>

				</select>
				
				<br/><br/><hr/><br/>
				
					<!-- OTRAIS SELECT TAG-->
				<select name='programmas'>
				<!-- Funkcijas izsauksana-->
				<option value = 'visi ieraksti' selected> Visi ieraksti </option>
				<?php priek() ?>
				</select><button type="submit" name="sutit2" class="btn btn-default"><b>apstiprināt</b></button>
				<br/><br/><hr/><br/>
				<a href = "1var.php"><b>Atjaunot</b></a><br/>
			<a href = "sakums.php"><b>Atpakaļ</b></a>
		</form>

		<?php
		
		
			if(isset($_POST['sutit'])){
			$prieksmeti = $_POST['prieksmeti'];
				echo "Jūs izvēlējāties vienkāršo 'select tag' priekšmetu: <b>{$prieksmeti}<b/>";
			}
			if(isset($_POST['sutit2'])){
			$programmas = $_POST['programmas'];
				echo "<b>Jūs izvēlējāties 'select tag', kurš atlasa priekšmetus no tabulas: {$programmas}<b/>";
			}

		?>

	</div>
	<form action = "sakums.php" method = "post">
		<button type="submit" name="iziet" class="btn btn-default"><b>Atslēgties</b></button>
	</form>
	<?php
	if(isset($_POST["iziet"])){
		session_destroy();
		header("Location:index.php");
	}

	?>

    </body>
</html>

<!--Noderīgi linki
http://snippets.dzone.com/posts/show/376 - valstis
http://www.pantz.org/software/mysql/mysqlcommands.html
http://www.w3schools.com/php/php_ajax_database.asp
-->