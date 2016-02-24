
<?php
class template_Class
{
    var $author = "";



    function showMenu(){
        echo '
				<nav class="navbar navbar-inverse">

  <div class="container-fluid1">

    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" style="color:white;font-family:impact; font-size: 25px">Mācības</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
            <li role="separator" class="divider"></li>
            <li><a href="sakums.php" style="color:white" class="mvirsraksti">Sākums</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="1var.php" style="color:white" class="mvirsraksti">1var</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="2var.php" style="color:white" class="mvirsraksti">2var</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="3var.php" style="color:white" class="mvirsraksti">3var</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="4var.php" style="color:white" class="mvirsraksti">4var</a></li>
            <li role="separator" class="divider"></li>
          </ul>




    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
				';

    }


}