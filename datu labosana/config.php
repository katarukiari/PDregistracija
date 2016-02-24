<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="noformejums.css" />
    <link rel="SHORTCUT ICON" href="bildes/favicon.ico"/>
<body>
<?php
$server = "localhost";
$dbuser = "root";
$dbpw = "";
$db = "muzejs";
$con = mysql_connect($server,$dbuser,$dbpw);
if(!$con){
die('Opa, MySQL neiet!');
}
mysql_select_db($db, $con);
mysql_query("SET NAMES utf8");
mysql_query("SET CHARACTER SET utf8");

?>
    </body>
</html>

