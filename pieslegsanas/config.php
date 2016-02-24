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