<template>
    <footer class="text-white">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <span class="copyright">Copyright &copy; Joshé Theys 2022</span>
          </div>
          <div class="col-md-6">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="https://github.com/joshetheys">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com/joshe_2001/">
                 <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/josh%C3%A9-theys-599094237/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
           <!-- <div class="social">
            <a href="https://www.instagram.com/joshe_2001/" class="instagram"><i class="bi bi-instagram" style="font-size: 3rem;"></i></a> 
            <a href="https://www.linkedin.com/in/josh%C3%A9-theys-599094237/" class="linkedin"><i class="bi bi-linkedin" style="font-size: 3rem;"></i></a>
            <a href="https://github.com/joshetheys" class="github"><i class="bi bi-github" style="font-size: 3rem;"></i></a>
       </div> -->
        </div>
      </div>
    </footer>

</template>
<style scoped>
footer {
  padding: 25px 0;
  text-align: center;
  background-color: #3D3D3D
}
footer span.copyright {
  font-size: 90%;
  line-height: 40px;
  text-transform: none;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
footer ul.quicklinks {
  font-size: 90%;
  line-height: 40px;
  margin-bottom: 0;
  text-transform: none;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
ul.social-buttons {
  margin-bottom: 0;
}
ul.social-buttons li a {
  font-size: 20px;
  line-height: 50px;
  display: block;
  width: 50px;
  height: 50px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  color: #fff;
  border-radius: 100%;
  outline: 0;
 
  background-color: #6c63ff;
}
ul.social-buttons li a:active,
ul.social-buttons li a:focus,
ul.social-buttons li a:hover {
  background-color: pink;
}
</style>
