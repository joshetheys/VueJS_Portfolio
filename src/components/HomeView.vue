
<template>


<div class="landing-page " id="home">
  <div class="container">

    <div class="info">
      <h1>Hello, I'm Joshé Theys!</h1>
      <p>I am an aspiring full-stack developer.</p>
      <button> <a href="https://github.com/joshetheys"></a>GitHub</button>
    </div>
    <!-- <div class="image">
      <img src="https://i.postimg.cc/qRFKSZZ1/Joshe-Jade-1-removebg-preview.png">
    </div> -->
    <div class="clearfix"></div>
  </div>
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

<style scoped>
* {
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
   overflow-x: hidden;
}

/* .container {
    width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    margin: auto;
} */

/* Start Landing Page */

.landing-page {
  width: 100%;
  height: 100vh;
   background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(https://i.postimg.cc/Jhj3WbHN/eberhard-grossgasteiger-Nvesr-Dbsr-L4-unsplash.jpg);
    position: relative;
    background-color: #FFF;
}

.landing-page .header-area {
    display: flex;
    padding: 25px 0 0;
    position: relative;
}

.landing-page .header-area .logo {
    text-transform: uppercase;
    font-style: italic;
    margin-top: 10px;
    font-size: 19px;
    width: 300px;
    color: #5d5d5d;
}

.landing-page .header-area .links {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: right;
}

.landing-page .header-area .links li {
    display: inline-block;
    margin-left: 30px;
    color: #5d5d5d;
    cursor: pointer;
}

.landing-page .header-area .links li:last-child {
    border: 0;
    border-radius: 20px;
    padding: 10px 18px;
    color: #FFF;
    background-color: #6c63ff;
}

.landing-page .info {
     width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: #fff;
}


.landing-page .info h1 {
    font-size: 44px;
    margin: 0 0 20px;
    line-height: 1.4;
    color: #5d5d5d;
}

.landing-page .info p {
    margin: 0;
    line-height: 1.6;
    font-size: 15px;
    color: #5d5d5d;
}

.landing-page .info button {
    border: 0;
    border-radius: 20px;
    padding: 12px 30px;
    margin-top: 30px;
    cursor: pointer;
    color: #FFF;
    background-color: #6c63ff;
}

.landing-page .image {
    width: 100%;
height: 50vh;
    float: right;
    margin-top: 35px;
}

.landing-page .image img {
    max-width: 100%;
}

.clearfix {
  clear: both;
}

/* End Landing Page */
/* .home {
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
} */



</style>
