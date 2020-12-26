<?php 
	class vistasModelo{
		protected function obtener_vistas_modelo($vistas){
			$listaBlanca=[
				"home",
				"conocenos",
				"productos",
				"alianzas",
				"transparencia",
				"contactanos"
			];
			if(in_array($vistas, $listaBlanca)){
				if(is_file("./views/layouts/".$vistas."-view.php")){
					$contenido="./views/layouts/".$vistas."-view.php";
				}else{
					$contenido="home";
				}
			}else{
				$contenido="404";
			}
			return $contenido;
		}
	}