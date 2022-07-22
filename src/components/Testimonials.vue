<template>
    <section  id="testimonials" style="padding-top: 4em;">
        <div class="section-title display-2 text-center" style="color: #6c63ff">
            <h2>Testimonials</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div id="customers-testimonials" class="owl-carousel">
                        <!--TESTIMONIAL 1 -->
                        <div class="item " v-for="testimonial in testimonials"
            :key="testimonial">
                            <div class="shadow-effect">
                                <img class="img-circle" :src="testimonial.image" alt="" />
                                <p class="text-white">
                                    <i class="fas fa-quote-left"></i>
                                    {{ testimonial.quote }}
                                    <i class="fas fa-quote-right"></i>
                                </p>
                            </div>
                            <div class="testimonial-name btn-grad floating">
                                {{ testimonial.name }} - {{ testimonial.level }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <section v-else>
        <h5>Loading...</h5>
    </section> -->
</template>

<script>
// Owl Carousel
jQuery(document).ready(function ($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $("#customers-testimonials").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 3,
            },
        },
    });
});

export default {
    data() {
        return {
            testimonials: [{
                image: "https://i.postimg.cc/ZnWhSJ4G/Mikhail-2.jpg",
                name: "Mikhail Thomas",
                quote: " I have been working with Joshe for the past month as a colleague of Life Choices Academy coding internship. Inside and outside the classroom Joshe's wonderful personality and intelligence makes her presents warm welcoming. When working on a projects with Joshe she was always well informed and she's a bit of a perfectionist these aspects alone made her a valued and respected team member. If you choose to make her a part of your team and company you wont be dissapointed.",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.postimg.cc/j2p4ShYs/Emile-3.jpg",
                name: "Emile van der Wyk",
                quote: "Joshe Theys, A person with uncapped talent and a perspective of positivity. In my time with her I've seen her go from zero to hero, she is an diligent and daring individual, always making sure her work is done and expeditiously completing them without fail, Joshe is a peoples person and talking to her makes every interaction fun, when it comes to working in a team she takes initiative to bring everyone together and is very vocal when it comes to planning making her a asset to any team and work force.",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.postimg.cc/mgBBcfwH/Reagon-2.jpg",
                name: "Reagan Carolussen",
                quote: " Joshe is a talented individual that always displays professional work of the best quality. She has a great eye for design, works hard, has great teamwork skills and is a pleasure to work with. I would highly recommend her to any team.",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.postimg.cc/1Xqq4J2C/joel2.jpg",
                name: "Joel Mukanya",
                quote: " Joshe has proven to have a vital understanding of the HTML & CSS topics we have been studying. Joshe is doing very well and enjoys her classes. Your organization would be well served by her. Joel Mukanya - her coding Lecturer",
                level: "Coding Lecturer",
            },
            {
                image: "https://i.postimg.cc/1XsNCYSV/Bulelani-2.jpg",
                name: "Bulelani Skhikhi",
                quote: " Joshe has impeccable work ethic and has displayed desirable work endurance. I have observed her immense talent and determination to her craft. Contently pushing and expanding her limits in coding. Joshe shows immense promise and I know will be a great addition. I highly recommend her",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.postimg.cc/CLtxd62C/Amanda-3.jpg",
                name: "Amanda Gudlwa",
                quote: "Joshe is a person with a very positive out look on life, she is open minded and is tolerant of everyone. She has her own strong beliefs, but she is also very respect other people's beliefs. I have known Joshe for a month now. I was drawn to her from day one. She is able to hold conversation, and can fully engage with any topic. I respect her work ethic, and her drive. She is a person that is able to move from not knowing to knowing swiftly, because she understands herself, and how she learns best. As a team player, she is a joy to work with, as she pulls her own weight and is a responsible, interactive person.",
                level: "Colleague / Peer",
            }
            ]
        }
    }
};
</script>

<style scoped>

.shadow-effect {
    background: rgb(61, 61, 61);
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #ececec;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.02);
    min-height: 550px;
}

#customers-testimonials .shadow-effect p {
    font-family: inherit;
    font-size: 17px;
    line-height: 1.5;
    margin: 0 0 17px 0;
    font-weight: 300;
}

.testimonial-name {
    margin: -17px auto 0;
    display: table;
    width: auto;
    padding: 9px 35px;
    border-radius: 12px;
    text-align: center;
    color: rgb(61, 61, 61);
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.12), 0 5px 7px rgba(0, 0, 0, 0.05);
}

#customers-testimonials .item {
    text-align: center;
    padding: 50px;
    margin-bottom: 80px;
    opacity: 0.2;
    -webkit-transform: scale3d(0.8, 0.8, 1);
    transform: scale3d(0.8, 0.8, 1);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

}

#customers-testimonials .owl-item.active.center .item {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}

.owl-carousel .owl-item img {
    transform-style: preserve-3d;
    max-width: 90px;
    margin: 0 auto 17px;
    border-radius: 50%;
    aspect-ratio: 1;
}

#customers-testimonials.owl-carousel .owl-dots .owl-dot.active span,
#customers-testimonials.owl-carousel .owl-dots .owl-dot:hover span {
    background: #3190e7;
    transform: translate3d(0px, -50%, 0px) scale(0.7);
}

#customers-testimonials.owl-carousel .owl-dots {
    display: inline-block;
    width: 100%;
    text-align: center;
}

#customers-testimonials.owl-carousel .owl-dots .owl-dot {
    display: inline-block;
}

#customers-testimonials.owl-carousel .owl-dots .owl-dot span {
    background: #3190e7;
    display: inline-block;
    height: 20px;
    margin: 0 2px 5px;
    transform: translate3d(0px, -50%, 0px) scale(0.3);
    transform-origin: 50% 50% 0;
    transition: all 250ms ease-out 0s;
    width: 20px;
}
</style>
