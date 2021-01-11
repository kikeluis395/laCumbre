<section class="contactanos">
    <div class="content-modal">
        <h1>Envíanos un mensaje,
            <br>¡Te responderemos de inmediato!
        </h1>
        <div class="contact-form">
            <form method="POST" class="contact" enctype="multipart/form-data" autocomplete="off">
                <input type="text" name="name" placeholder="Nombre completo" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="Celular" required>
                <input type="text" name="company" placeholder="Empresa" required>
                <label for="message">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="10" class="grid-block" required></textarea>
                <input type="submit" class="btn grid-block" name="enviar" value="ENVIAR">
            </form>
        </div>
    </div>
</section>

<?php include "./core/correoContacto.php";