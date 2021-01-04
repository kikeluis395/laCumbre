<!-- INICIO DE LA SECCION CONTACTANOS -->
<section class="contact">
    <div class="contact__img"></div>
    <!-- <a href="" class="contact__button" id="btnOpen">
        <div class="contact__button--text"></div>
        <div class="contact__button--img"></div>
    </a> -->
    <div class="contact__button" id="btnOpen">
        <div class="contact__button--text"></div>
        <div class="contact__button--img"></div>
    </div>
    <div class="contact__info">
        <div class="contact__info--number">
            <i class="icon-number"></i>
            <span>+51 1 606 9966</span>
        </div>
        <div class="contact__info--email">
            <i class="icon-email"></i>
            <span>informes@lacumbre.com.pe</span>
        </div>
        <div class="contact__info--address">
            <i class="icon-address"></i>
            <span>Calle Monterrey 355 of. 1001, Santiago de Surco</span>
        </div>
    </div>
</section>
<!-- FIN DE LA SECCION CONTACTANOS -->

<!-- MODAL/POPUP CONTÁCTANOS -->
<div class="modal-container" id="modal-container">
    <div class="content-modal">
        <p class="modal-close" id="modal-close">X</p>
        <h1>Envíanos un mensaje,
            <br>¡Te responderemos de inmediato!
        </h1>
        <div class="contact-form">
            <form action="">
                <input type="text" name="name" placeholder="Nombre completo" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" placeholder="Celular" required>
                <input type="text" name="company" placeholder="Empresa" required>
                <label for="message">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="10" class="grid-block" required></textarea>
                <button type="submit" class="grid-block">Enviar</button>
            </form>
        </div>
    </div>
</div>
<!-- FIN MODAL/POPUP CONTÁCTANOS -->