<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->
<template>
  <div class="home">
    <div id="home" class="container d-flex justify-content-center align-items-center vh-100">
      <div class="d-inline-block">
      <h1 style="color: white; font-size: 5vw; margin-bottom: 1rem" data-aos="fade-up"
     data-aos-duration="2000">
       Joshé Theys
      </h1> <br>
      <p id="landingP" class="text-center" style="color: white; word-wrap: break-word; " data-aos="fade-up"
     data-aos-duration="2000">
       I'm an aspiring Full Stack Web Developer from Cape Town.
      </p>
     
      </div>
    </div>
  </div>

 

 <div>
  

   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";


export default {
  name: "HomeView",
  components: {
    HelloWorld,
    
  }
}
  
</script>

<style>
.home {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      #000000 99%
    ),
    url("https://i.postimg.cc/QNQnhpBV/Joshe-Jade-1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  background-position: center;
}

#landingP{
  /* -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: black; */
}

</style>
