<?php
include("config.php");

?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script type="text/javascript" scr="jquery-1.11.3.js"></script>

    <link rel="stylesheet" type="text/css" href="noformejums.css" />
    <link rel="SHORTCUT ICON" href="favicon.ico"/>
    <script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>

    <title>Sākums</title>
</head>
<body>


<?php
// define variables and set to empty values
$nameErr = $emailErr  = $password1Err =$password2Err = $userErr = $surnameErr="";
$name = $email = $password1 = $password2 = $surname  = $user = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["vards"])) {
        $nameErr = "Jūs neievadījāt vārdu";
    }
        if (empty($_POST["uzvards"])) {
            $surnameErr = "Jūs neievadījāt uzvārdu";
        }
            if (empty($_POST["epasts"])) {
                $emailErr = "Jūs neievadījāt epastu";
            }


    if (empty($_POST["lietotajvards"])) {
        $userErr = "Jūs neievadījāt lietotājvārdu";
    }
    if (empty($_POST["parole1"])) {
        $password1Err = "Jūs neievadījāt patoli";
    }
    if (empty($_POST["parole2"])) {
        $password2Err = "Jūs neievadījāt atkartotu patoli";
    }

        }


function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>



<div id = "vidus">
    <form method = "post" action = "register.php">
        <div class="container-fluid" style="padding-top: 10%">
            <div class="intro">
                <div class="col-md-4" style="border:none">
                    <p></p>
                </div>
                <div class="col-md-4" style="background-color:black;padding: 20px;max-width:400px">

                    <form role="form">
                        <div class="form-group">
                            <label for="usr"class="lb">Vārds:</label>
                            <input type="text" name="vards" class="form-control" id="usr">
                            <span class="error"> <?php echo $nameErr;if($nameErr==true){
                                    $e=1;
                                }?></span>
                        </div>

                        <form role="form">
                        <div class="form-group">
                            <label for="usr"class="lb">Uzvārds:</label>
                            <input type="text" name="uzvards" class="form-control" id="usr">
                            <span class="error"> <?php echo $surnameErr;if($surnameErr==true){
                                    $e=1;
                                }?></span>
                        </div>

                            <form role="form">
                                <div class="form-group">

                                    <label for="usr"class="lb">Lietotājvārds:</label>
                                    <input type="text" name="lietotajvards" class="form-control" id="usr">
                                    <span class="error"> <?php echo $userErr;if($userErr==true){
                                            $e=1;
                                        }?></span>
                                </div>



                        <div class="form-group">
                            <label for="pwd"class="lb">Parole:</label>
                            <input type="password" name="parole1" class="form-control" id="parole1">
                            <span class="error"> <?php echo $password1Err;if($password1Err==true){
                                    $e=1;
                                }?></span>
                        </div>

                        <div class="form-group">
                            <label for="pwd"class="lb">Atkārtot paroli::</label>
                            <input type="password" name="parole2" class="form-control" id="parole2">
                            <span class="error"> <?php echo $password2Err;if($password2Err==true){
                                    $e=1;
                                }?></span>
                        </div>

                        <form role="form">
                        <div class="form-group">
                            <label for="email"class="lb">E-pasts:</label>
                            <input type="email" name="epasts" class="form-control" id="email">
                            <span class="error"> <?php echo $emailErr;if($emailErr==true){
                                    $e=1;
                                }?></span>
                        </div>




                        <button type="submit" name="saglabat" class="btn btn-default"><b>Saglabāt</b></button>
                        <button type="button" class="btn btn-default pull-right" data-dismiss="modal"><a href = "sakums.php"><b>Atpakaļ</b></a></button>
                    </form>
                    <br>





<?php
if(isset($_POST["saglabat"])){
    //pārbaude, vai paroles sakrīt
    if($_POST['parole1'] == $_POST['parole2']&&$e==0){
        $vards =  mysql_real_escape_string($_POST["vards"]);
        $uzvards =  mysql_real_escape_string($_POST["uzvards"]);
        $lietotajvards = mysql_real_escape_string($_POST["lietotajvards"]);
        $epasts = mysql_real_escape_string($_POST["epasts"]);
        $parole = md5(mysql_real_escape_string($_POST["parole1"]));
        //infromācijas saglabāšana datu bāzē
        mysql_query("INSERT INTO lietotaji (vards, uzvards, lietotajvards, parole, epasts)
				VALUES ('$vards', '$uzvards', '$lietotajvards', '$parole', '$epasts')");

    }// paroļu if beigas
    elseif($_POST['parole1'] != $_POST['parole2']) {echo "<span class='pazinojums' style='color: white' >Paroles nesakrīt, lūdzu ievadiet nepieciešamo informāciju vēlreiz!</span>";}
}//if beigas

?>

</body>
</html>