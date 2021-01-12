<!-- menu principal -->
<header>
    <nav class="header" id="menu_navbar">
        <div class="header--container">
            <div class="logo-white" id="logo_white" style="display: block;">
                <a href="<?php echo SERVERURL; ?>home/">
                    <img src="<?php echo SERVERURL; ?>views/img/Logotipo-04.png" alt="" class="logotipo">
                </a>
            </div>
            <ul class="header--menu-main" id="menu--main">
                <li class="menu-item"><a href="<?php echo SERVERURL; ?>conocenos/">Conócenos</a></li>
                <li class="menu-item menuSubmenu"><a href="<?php echo SERVERURL; ?>productos/">Productos</a>
                    <i class="fas fa-angle-down arrow" id="submenu--icon" onclick="mostrarSubmenu(0)"></i>
                    <ul class="submenu">
                        <li><a href="<?php echo SERVERURL; ?>productos/ahorros">Ahorros</a></li>
                        <li><a href="<?php echo SERVERURL; ?>productos/creditosPersonales">Créditos personales</a></li>
                        <li><a href="<?php echo SERVERURL; ?>productos/creditoPyme">Crédito pyme</a></li>
                        <li><a href="<?php echo SERVERURL; ?>productos/creditoConGarantia">Crédito con garantía</a></li>
                    </ul>
                </li>
                <li class="menu-item menuSubmenu"><a href="<?php echo SERVERURL; ?>alianzas/">Alianzas</a>
                    <i class="fas fa-angle-down arrow" id="submenu--icon" onclick="mostrarSubmenu(1)"></i>
                    <ul class="submenu">
                        <li><a href="<?php echo SERVERURL; ?>alianzas/euroidiomas">Euroidiomas</a></li>
                        <li><a href="<?php echo SERVERURL; ?>alianzas/cruzDelSur">Cruz del sur</a></li>
                        <li><a href="<?php echo SERVERURL; ?>alianzas/huampani">Huampaní</a></li>
                        <li><a href="<?php echo SERVERURL; ?>alianzas/anytime">Anytime</a></li>
                        <li><a href="<?php echo SERVERURL; ?>alianzas/eides">Eides</a></li>
                        <li><a href="<?php echo SERVERURL; ?>alianzas/nova">Nova</a></li>
                    </ul>
                </li>
                <li class="menu-item menuSubmenu"><a href="<?php echo SERVERURL; ?>transparencia/">Transparencia</a>
                    <i class="fas fa-angle-down arrow" id="submenu--icon" onclick="mostrarSubmenu(2)"></i>
                    <ul class="submenu">
                        <li><a href="<?php echo SERVERURL; ?>transparencia/">Tablas</a></li>
                        <li><a href="<?php echo SERVERURL; ?>transparencia/">Tarifarios</a></li>
                        <li><a href="<?php echo SERVERURL; ?>transparencia/">Libro de sugerencias</a></li>
                    </ul>
                </li>
                <li class="menu-item"><a href="<?php echo SERVERURL; ?>contactanos/">Contáctanos</a></li>
            </ul>
            <div class="menu--icon" >
                <i class="fa fa-bars" id="menu--icon"></i>
            </div>
        </div>
    </nav>
</header>
    <!-- fin del menu principal -->