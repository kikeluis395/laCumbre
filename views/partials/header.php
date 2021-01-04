<header>
    <!-- primer encabezado -->
    <div class="header1" id="top_navbar">
        <ul>
            <a href="<?php echo SERVERURL; ?>home/">
                <li class="header1--logo"></li>
            </a>
            <div class="header1--inputs">
                <li class="header1--search">
                    <form action="">
                        <input type="search" class="search" placeholder="Búscar">
                    </form>
                    <span class="">
                        <a href="" type="button">
                            <i class="fas fa-search"></i>
                        </a>
                    </span>
                </li>
                <li class="header1--button"><a href="">¡Hazte socio!</a></li>
                <li class="header1--button operations"><a href="">Operaciones en linea</a></li>
            </div>
        </ul>
    </div>
    <!-- fin del primer encabezado -->
    <!-- menu principal -->
    <nav class="header" id="menu_navbar">
        <div class="header--container">
            <div class="logo-white" id="logo_white">
                <a href="<?php echo SERVERURL; ?>home/">
                    <img src="<?php echo SERVERURL; ?>views/img/Logotipo-04.png" alt="" class="logotipo">
                </a>
            </div>
            <ul class="header--menu-main">
                <li class="menu-item"><a href="<?php echo SERVERURL; ?>conocenos/">Conócenos</a></li>
                <li class="menu-item"><a href="">Productos</a>
                    <ul class="submenu">
                        <li><a href="">Ahorros</a></li>
                        <li><a href="">Créditos personales</a></li>
                        <li><a href="">Crédito pyme</a></li>
                        <li><a href="">Crédito con garantía</a></li>
                    </ul>
                </li>
                <li class="menu-item"><a href="<?php echo SERVERURL; ?>alianzas/">Alianzas</a>
                    <ul class="submenu">
                        <li><a href="">Euroidiomas</a></li>
                        <li><a href="">Huampaní</a></li>
                        <li><a href="">Cruz del sur</a></li>
                    </ul>
                </li>
                <li class="menu-item"><a href="<?php echo SERVERURL; ?>transparencia/">Transparencia</a>
                    <ul class="submenu">
                        <li><a href="">Tablas</a></li>
                        <li><a href="">Tarifarios</a></li>
                        <li><a href="">Libro de sugerencias</a></li>
                    </ul>
                </li>
                <li class="menu-item"><a href="">Contáctanos</a></li>
            </ul>
            <div class="menu--icon" id="menu--icon">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </nav>
    <!-- fin del menu principal -->
</header>