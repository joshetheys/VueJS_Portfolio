<template>
    <nav class="navbar sticky-top navbar-expand-lg bg-dark">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <i class="fas fa-bars"></i>
      <a class="navbar-brand" href="https://www.linkedin.com/in/josh%C3%A9-theys-599094237/">Joshe Theys</a>
  </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto w-100 justify-content-end">
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/resume">Resume</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/projects">Projects</router-link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><router-link to="/testimonial">Testimonials</router-link></a>
                </li>
                      <li class="nav-item">
                  <a class="nav-link" href="#"><router-link to="/contact">Contact</router-link></a>
                </li>
        </ul>
      </div>
    </div>
  </nav>

    <!-- Header -->


</template>

<script>
export default {
  
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Titillium+Web");
* {
  font-family: "Titillium Web", sans-serif;
}
body {
  height: 2000px;
}
.navbar .navbar-brand {
  font-size: 30px;
}
.navbar .nav-item {
  padding: 10px 20px;
}
.navbar .nav-link {
  font-size: 20px;
  margin-left: 10px;
}
.fa-bars {
  color: pink;
  font-size: 30px;
}

</style>