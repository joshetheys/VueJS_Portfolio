<template>
    <section id="contact" class="contact">
        <div class="container my-5">
            <div class="section-title">
                <h2 class="display-2 text-center" style="color: #6c63ff;">Contact</h2>
                <p>Get in Touch</p>
            </div>
            <div class="row mt-2">
                <div class="col-md-6 mt-4 ">
                    <div class="info-box"> <i class="bx bx-envelope"></i>
                        <h3><i class="bi bi-envelope"></i>Email Me</h3>
                        <p>JosheTheys@gmail.com</p>
                    </div>
                </div>
                <div class="col-md-6 mt-4 ">
                    <div class="info-box"> <i class="bx bx-phone-call"></i>
                        <h3><i class="bi bi-telephone-fill"></i>Call Me</h3>
                        <p>074 485 0721</p>
                    </div>
                </div>
            </div>
            <form action="https://formspree.io/f/mknyqejd" method="post" role="form" class="php-email-form mt-4">
                <div class="row">
                    <div class="col-md-6 form-group"> <input type="text" name="name" class="form-control" id="name"
                            placeholder="Your Name" required></div>
                    <div class="col-md-6 form-group mt-3 mt-md-0"> <input type="email" class="form-control" name="email"
                            id="email" placeholder="Your Email" required></div>
                </div>
                <div class="form-group mt-3"> <input type="text" class="form-control" name="subject" id="subject"
                        placeholder="Subject" required></div>
                <div class="form-group mt-3"><textarea class="form-control" name="message" rows="5"
                        placeholder="Message" required></textarea></div>

                <div class="text-center"><button class="button text-white " style="border-radius:20px; border: none; margin-top: 3rem; padding: 10px" type="submit">Send Message</button></div>
            </form>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.button{
    background-color: #6c63ff;
}
</style>
