<?php
include("config.php");
session_start();
if(!isset($_SESSION['lietotajvards']))
{ header("location:index.php"); }
//Nodefinājam funkciju, kura tiks izmantota, lai no tabulas priekšmeti tiku atlasīti visi ieraksti. (Distinct - novēršs ierakstu atkārtošanos)
function priek(){

	$result = mysql_query("SELECT DISTINCT prieksmeti.ID, prieksmeti.prieksmets FROM prieksmeti") or die(mysql_error());
	while($row = mysql_fetch_array( $result )) 
		{
			$ID = $row['ID'];
			$prieksmets = $row['prieksmets'];
			echo" <option value = '$ID'>{$prieksmets}</option> ";
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
		<form action = "4var.php" method = "get">
			<div class = "virsraksti">Vienkāršs select tag:</div>
			<select name='programmas'>
				<!-- Funkcijas izsauksana-->
				<option value = 'visi ieraksti' selected> Visi ieraksti </option>
				<?php priek() ?>
				</select><button type="submit" name="delete" class="btn btn-default"><b>Dzēst</b></button>
				<br/><br/><hr/><br/>
		</form>

		<?php
			if(isset($_GET['delete'])){
			//$dzest = $_GET['programmas']; 
			//dzesana
				$result = mysql_query("DELETE FROM prieksmeti WHERE prieksmeti.ID = ".$_GET['programmas']."") or die(mysql_error());
			}
			
			//informācijas attēlošana
			$result = mysql_query("SELECT * FROM prieksmeti")or die(mysql_error());
			//nodrošina nummerāciju
			$i = 0;
			echo "<table>";
			while($row = mysql_fetch_array($result)) {
			$i++;
				echo "<tr>";
				echo "<td width='100px' align = 'center'><div class = 'tabulas_teksts' align = 'right' ><b>{$i}.</b></td>";
				echo "<td width='100px' align = 'center'><div class = 'tabulas_teksts' align = 'left'><b>{$row['prieksmets']}</b></td>";
			
				echo "</tr>";
			}
			echo "</table>";
		?>
		<a href = "4var.php"><b>Atjaunot</b></a><br/>
	<a href = "sakums.php"><b>Atpakaļ</b></a>
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

