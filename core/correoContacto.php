<?php

if (isset($_POST['enviar'])) {
    if (isset($_POST['email']) && $_POST['message']) {
        $para = "contactos@lacumbre.com";
        $asunto = "Contacto";
        $mensaje = ($_POST['message']);
        $from = ($_POST['email']);
        $headers = "From:" . $from;

        //datos
        $name = ($_POST['name']);
        $phone = ($_POST['phone']);
        $company = ($_POST['company']);

        //$msgCompleto = $mensaje."\nAtentamente: ".$name." \nCelular: ".$phone." \nEmpresa: ".$company ;

        //mail($para, $asunto, $msgCompleto, $headers);
        //echo $msgCompleto;
        echo "
        <script>
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Mensaje enviado',
                showConfirmButton: false,
                timer: 1500
            })
            const url = '/laCumbre/home';
            setTimeout(\"window.location = url\",1500);
        </script>";
    }
}