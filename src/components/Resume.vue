<template>
    <section id="resume">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center" style="color: #6c63ff">
            <h2 class="section-heading text-uppercase display-2 text-center">Resume</h2>
            <h3 class="section-subheading text-muted">My Journey In A Few Short Words</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12"> 
            <ul class="timeline">
              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" style="width:90px ; height:100% " src="https://i.postimg.cc/1zBk5XSq/logo.png" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>2019</h4>
                    <h4 class="subheading">Graduated High School</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
I graduated high school with a Bachelor's Pass at The Settlers High School with a A-aggregate. The subjects I took were English Home Language, Afrikaans Home Language, Life Orientation, Mathematics, Physical Sciences, Life Sciences, History, Geography.</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="https://i.postimg.cc/VkKj4PW8/Stellenbosch-Logo.png" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>2020-2021</h4>
                    <h4 class="subheading">Stellenbosch University</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted"> 
I attended Stellenbosch University from 2020-2021. I studied an LLB and took a gap year before finishing my degree. I am considering changing my degree.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="https://i.postimg.cc/VkKj4PW8/Stellenbosch-Logo.png" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>2021</h4>
                    <h4 class="subheading">Took TEFL Course </h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
I took a TEFL teaching course at Stellenbosch University. It has helped me improve my leadership and time-management skills as I had to plan out lessons and teach classes to foreign students.</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="https://i.postimg.cc/dQXQ2Hyx/LIFE-CHOICES-ICON-ON-GREEN.jpg" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>2022</h4>
                    <h4 class="subheading">Life Choices Academy </h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
I am doing a Web Development and Coding course wherein I'm learning the basics to make me a great Full-Stack Developer.</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <h4 class="text">Be A Part
                    <br>Of My
                    <br>Story!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>

</script>

<style  scoped>
.text {
  color: black;
}
.timeline {
  position: relative;
  padding: 0;
  list-style: none;
}
.timeline:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40px;
  width: 2px;
  margin-left: -1.5px;
  content: "";
  background-color: #e9ecef;
}
.timeline > li {
  position: relative;
  min-height: 50px;
  margin-bottom: 50px;
}
.timeline > li:after,
.timeline > li:before {
  display: table;
  content: " ";
}
.timeline > li:after {
  clear: both;
}
.timeline > li .timeline-panel {
  position: relative;
  float: right;
  width: 100%;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li .timeline-image {
  position: absolute;
  z-index: 100;
  left: 0;
  width: 80px;
  height: 80px;
  margin-left: 0;
  text-align: center;
  color: #fff;
  border: 7px solid #e9ecef;
  border-radius: 100%;
  background-color: white;
}
.timeline > li .timeline-image h4 {
  font-size: 10px;
  line-height: 14px;
  margin-top: 12px;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li:last-child {
  margin-bottom: 0;
}
.timeline .timeline-heading h4 {
  margin-top: 0;
  color: inherit;
}
.timeline .timeline-heading h4.subheading {
  text-transform: none;
}
.timeline .timeline-body > p,
.timeline .timeline-body > ul {
  margin-bottom: 0;
}
@media (min-width: 768px) {
  .timeline:before {
    left: 50%;
  }
  .timeline > li {
    min-height: 100px;
    margin-bottom: 100px;
  }
  .timeline > li .timeline-panel {
    float: left;
    width: 41%;
    padding: 0 20px 20px 30px;
    text-align: right;
  }
  .timeline > li .timeline-image {
    left: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
  }
  .timeline > li .timeline-image h4 {
    font-size: 13px;
    line-height: 18px;
    margin-top: 16px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    float: right;
    padding: 0 30px 20px 20px;
    text-align: left;
  }
}
@media (min-width: 992px) {
  .timeline > li {
    min-height: 150px;
  }
  .timeline > li .timeline-panel {
    padding: 0 20px 20px;
  }
  .timeline > li .timeline-image {
    width: 150px;
    height: 150px;
    margin-left: -75px;
  }
  .timeline > li .timeline-image h4 {
    font-size: 18px;
    line-height: 26px;
    margin-top: 30px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    padding: 0 20px 20px;
  }
}
</style>
