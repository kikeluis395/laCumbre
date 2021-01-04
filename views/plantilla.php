<!DOCTYPE html>
<html lang="es">

<head>
    <title><?php echo COMPANY; ?></title>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

    <script src="https://kit.fontawesome.com/adf54586be.js" crossorigin="anonymous"></script>

    <!-- Css Styles -->
    <?php include "./views/partials/styles.php"; ?>
</head>

<body>
    <?php
    require_once "./controllers/vistasControlador.php";

    $vt = new vistasControlador();
    $vistasR = $vt->obtener_vistas_controlador();

    //echo $vistasR;
    
    if ($vistasR == "404") :
        //require_once "./views/layouts/404-view.php";
        echo "Error 404";
    else :

        if ($vistasR == "./views/layouts/home-view.php"):
            include "./views/partials/header.php"; 
        else:
            include "./views/partials/header2.php";
        endif
    ?>

    <!-- particles.js container -->
    <div id="particles-js"></div>
    
    <!-- Content page-->
    <main class="container">
        <?php require_once $vistasR; ?>
    </main>
    <!-- Content page -->

    <!-- footer -->
    <?php include "./views/partials/contact.php";?>
    <?php include "./views/partials/footer.php"; ?>

    <?php
    endif;
    include "./views/partials/script.php";
    ?>
</body>

</html>