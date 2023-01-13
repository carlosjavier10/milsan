<template>
    <div id="contacto" name="contact">

        <section id="contact" class="section-bg wow fadeInUp">
            <div class="container">

                <div class="section-header">
                    <h3>Contacto</h3>
                    <p>Estamos encantados de escucharte y ayudar a hacer tu sue&ntilde;o realidad</p>
                </div>

                <div class="row contact-info">

                    <div class="col-md-4">
                        <div class="contact-address">
                            <i class="ion-ios-location-outline"></i>
                            <h3>Direcci&oacute;n</h3>
                            <address>Carrera 25 entre Av. Morán y, Av. Concordia, Barquisimeto, Venezuela</address>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="contact-phone">
                            <i class="ion-ios-telephone-outline"></i>
                            <h3>Tel&eacute;fono</h3>
                            <p><a href="tel:+155895548855">+58 0424-5308763</a></p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="contact-email">
                            <i class="ion-ios-email-outline"></i>
                            <h3>Correo</h3>
                            <p><a href="mailto:info@msarquitecta.com">info@msarquitecta.com</a></p>
                        </div>
                    </div>

                </div>
                <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////77 -->
                <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////77 -->
                <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////77 -->
                <div class="form">

                    <h1 class="agileits w3 wthree w3-agile w3-agileits agileinfo agile">Encantados de escucharte</h1>
                    <div class="content-w3ls agileits w3 wthree w3-agile w3-agileits agileinfo agile">

                        <div class="wassend" id="sendmessage">Su mensaje ha sido enviado, Muchas gracias por escribirnos
                        </div>

     <!--                    <div id="errormessage" >

                            <li> {{ $error }}</li>

                        </div> -->


                        <form @submit.prevent="send" class="contactForm form-agileits">

                            <input v-model="mail.name" type="text" name="name" id="name" placeholder="Su nombre"
                                data-rule="minlen:4" data-msg="por favor ingrese al menos 4 caracteres"
                                title="Ingrese su nombre" required />
                            <div class="validation"></div>

                            <input v-model="mail.email" type="email" name="correo" id="email"
                                placeholder="Correo Electrónico" data-rule="email"
                                data-msg="Por favor ingrese un email v&aacute;lido"
                                title="Por favor ingrese un correo electronico v&aacute;lido" required />
                            <div class="validation"></div>

                            <input v-model="mail.subject" type="text" name="subject" id="subject" placeholder="Asunto"
                                data-rule="minlen:4" data-msg="Por favor use al menos 8 caracteres"
                                title="Sobre que quieres escribirnos" />
                            <div class="validation"></div>

                            <textarea v-model="mail.mensaje" name="mensaje" rows="5" data-rule="required"
                                data-msg="Por favor cuentanos como podemos ayudarte"
                                placeholder="Su Mensaje"></textarea>
                            <div class="validation"></div>

                            <div class="g-recaptcha" data-sitekey="6Lcr68gfAAAAAN7aW_5RG14HMWgUJ0hfqSal2sQR"></div>
                            <br />
                            <p id="recaptch-fail" class="alert alert-danger" style="display:none;">
                                Por favor verifique el recaptcha
                            </p>

                            <input id="submit" type="submit" class="sign-in" value="Enviar">


                        </form>


                    </div>


                </div>
            </div>
        </section><!-- #contact -->
    </div>
</template>

<script>
export default {
    name: "send-mail",
    data() {
        return {
            mail: {
                name: "Carlos",
                email: "carlos@mail",
                subject: "test ",
                mensaje: "Probando formulario "
            },
            errors:{},
        }
    },
    methods: {
        send(){
            console.log("AAAAAAAAAAAAAAAAAA");
        }

        // async crear() {
        //     await this.axios.post('/api/blog', this.blog).then(response => {
        //         this.$router.push({ name: "mostrarBlogs" })
        //     }).catch(error => {
        //         console.log(error)
        //     })
        // }
    }
}
</script>

<style>
</style>
