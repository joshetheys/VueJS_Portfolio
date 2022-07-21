<template>
<NavBar/>
  <router-view/>
  <HomeView/>
  <AboutView/>
  <Resume/>
  <Projects/>
  <Testimonials/>
  <Contact/>
  <Footer/>
  


          

        
      
</template>
<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';
import Resume from './components/Resume.vue';
import Projects from './components/Projects.vue';
import Testimonials from './components/Testimonials.vue';
import Contact from './components/Contact.vue';


export default {
  components: { NavBar, Footer,HomeView, AboutView, Resume, Projects, Testimonials, Contact },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: pink;
}
</style>
