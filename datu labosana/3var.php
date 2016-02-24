<?php
include("config.php");
session_start();
if(!isset($_SESSION['lietotajvards']))
{ header("location:index.php"); }
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

<title>3. daļa - ierkstu labošana</title>
</head>

    <body>
	<?php
	$template = new template_Class();
	$template->showMenu();
	?>
	<div class = "sadala">
		<b>Priekšmeta nosaukums:</b>
		<form action = "3var.php" method = "get">
		<?php
		
	//informācijas atpoguļošana
		$result = mysql_query("SELECT * FROM prieksmeti")or die(mysql_error());
			//nodrošina nummerāciju
			$i = 0;
			echo "<table>";
			while($row = mysql_fetch_array($result)) {
			$i++;
				echo "<tr>";
				echo "<td width='100px' align = 'center'><div class = 'tabulas_teksts' align = 'right' ><b>{$i}.</b></td>";
				echo "<td width='100px' align = 'center'><div class = 'tabulas_teksts' align = 'left'><b>{$row['prieksmets']}</b></td>";
				echo "<td width='100px'><a href='3var.php?ID={$row['ID']}'>Labot</a></td>";
				echo "</tr>";
			}
			echo "</table><hr/>";
		
			
		//atrodam ierakstu kuru gribēsim labot. tā kā sākumā nav padots id, pēc kura varētu labot ierakstu ir jāpārbaudatā vērtība true vai false
	if(isset($_GET['ID']) == true){
		$test = $_GET['ID'];	
		$result = mysql_query("SELECT * FROM prieksmeti WHERE ID = $test")or die(mysql_error());
		while($row = mysql_fetch_array($result)) {
				$lab_prieksmets =  $row['prieksmets'];
		}		
		
		echo "<div style = 'color:#ffffff'><b>Ieraksts kurš tiks labots:</b> {$lab_prieksmets}</div>";
		//echo $test;
	
	
	?>
	<br/>
		<input type = "text" value = "<?php echo $lab_prieksmets ?>" name = "labpr"/>
		<input type = 'hidden' name = 'ids' value = '<?php echo $test ?>'/>
		<input type = "submit" value = "Salgabāt" name = "save"/>
	
	<?php
	}
		if(isset($_GET['save'])) {
		$id = $_GET['ids'];
			$pr = $_GET['labpr'];
			 $result = mysql_query("UPDATE prieksmeti SET 
			 prieksmets = '$pr'
			 WHERE ID = '$id'")or die(mysql_error());
			 
		}
		

	?>
	</form>


	<a href = "3var.php"><b>Atjaunot</b></a><br/>
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
