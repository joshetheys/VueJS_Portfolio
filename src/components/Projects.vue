<template>
    <section id="projects">
        <div class="section-title text-center" style="color: #6c63ff">
            <h2 class="display-2 ">Projects</h2>
        </div>
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-6 " v-for="project in projects" :key="project">

                    <div class="project-card">
                        <img class="img rounded" :src="project.image" alt="" />
                        <!-- <a href="" class="project-link">Learn more...</a> -->
                        <p class="text-black project-link ">
                            <!-- <i class="fas fa-quote-left"></i> -->
                        <p style="d-flex justify-content-start">{{ project.projectName }}</p>
                        <!-- <i class="fas fa-quote-right"></i> -->
                        </p>

                        <p class="text-black project-link">
                            <i class="fas fa-quote-left"></i>
                            {{ project.aboutProject }}
                            <i class="fas fa-quote-right"></i>
                        </p>
                          <!-- <p class="project-link">
                            
                            {{ project.githubLink }} {{ project.liveLink }}
                            
                        </p> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [{
                image: "https://i.postimg.cc/QdSMqxYD/To-Do-List.png",
                projectName: "To Do List App",
                aboutProject: "I created a To List App that can be used as a task manager using Javascript, HTML and CSS.",
                githubLink: <a href="https://github.com/joshetheys/toDoApp" target="_blank">
            <i class="fa-brands fa-github" style="font-size: 2rem; color: #ffa2b2;"></i>
          </a>,
                liveLink: <a href="https://enchanting-lamington-dee74e.netlify.app/" target="_blank">
            <i class="fa-solid fa-globe" style="font-size: 2rem; color: #ffa2b2;"></i> 
          </a>
            },
            {
                image: "https://i.postimg.cc/HsxvLSGt/Kpop-Ecommerce-Store.png",
                projectName: "Kpop Ecommerce Store",
                aboutProject: "I created a Kpop Ecommerce Store using Javascript, HTML and CSS.",
                githubLink: <a href="https://github.com/joshetheys/Product_website_js" target="_blank">
            <i class="fa-brands fa-github" style="font-size: 2rem; color: #ffa2b2;"></i>
          </a>,
                liveLink: <a href="https://delicate-pika-3faae9.netlify.app/" target="_blank">
            <i class="fa-solid fa-globe" style="font-size: 2rem; color: #ffa2b2;"></i> 
          </a>
            },
            {
                image: "https://i.postimg.cc/RF21VTwg/Temperature-Convertor.png",
                projectName: "Temperature Convertor",
                aboutProject: "I created a Temperature Convertor using Javascript, HTML and CSS.",
                githubLink: <a href="https://github.com/joshetheys/Temperature_Converter" target="_blank">
            <i class="fa-brands fa-github" style="font-size: 2rem; color: #ffa2b2;"></i>
          </a>,
                liveLink: <a href="https://tourmaline-moxie-a9ee99.netlify.app/" target="_blank">
            <i class="fa-solid fa-globe" style="font-size: 2rem; color: #ffa2b2;"></i> 
          </a>
                
            },
            {
                image: "https://i.postimg.cc/qqbT3zMD/Functional-Calculator.png",
                projectName: "Calculator",
                aboutProject: "I created a Functional Calculator using Javascript, HTML and CSS.",
                 githubLink: <a href="https://github.com/joshetheys/Javascript_Calculator" target="_blank">
            <i class="fa-brands fa-github" style="font-size: 2rem; color: #ffa2b2;"></i>
          </a>,
                liveLink: <a href="https://tourmaline-pavlova-d08658.netlify.app/" target="_blank">
            <i class="fa-solid fa-globe" style="font-size: 2rem; color: #ffa2b2;"></i> 
          </a>
            
            },
            {
                image: "https://i.postimg.cc/JzbRT7T0/Age-To-Days-Calculator.png",
                projectName: "Age to Days Calculator",
                aboutProject: "I created a calculator that when user inputes their date of birth, it will return the number of days the user has been alive for.",
                githubLink: <a href="https://github.com/joshetheys/ageToDays" target="_blank">
            <i class="fa-brands fa-github" style="font-size: 2rem; color: #ffa2b2;"></i>
          </a>,
                liveLink: <a href="https://storied-froyo-61ea7a.netlify.app/" target="_blank">
            <i class="fa-solid fa-globe" style="font-size: 2rem; color: #ffa2b2;"></i> 
          </a>
    
            },
            {
                image: "https://i.postimg.cc/NGzC5W6j/BMI-Calculator.png",
                projectName: "BMI Calculator",
                aboutProject: "I created a BMI Calculator wherein the user inputes their weight and height which will used to return a BMI number using Javascript, HTML and CSS.",
                 githubLink: <a href="https://github.com/joshetheys/BMI_Calculator" target="_blank">
            <i class="fa-brands fa-github" style="font-size: 2rem; color: #ffa2b2;"></i>
          </a>,
                liveLink: <a href="https://cheery-scone-c2bb0f.netlify.app/" target="_blank">
            <i class="fa-solid fa-globe" style="font-size: 2rem; color: #ffa2b2;"></i> 
          </a>
    
            }
            ]
        }
    }
};

</script>

<style scoped>
.img {
    width: 100%;
    max-width: 500px;
    height: 100%;
    max-height: 500px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.project-card {
    transition: transform 330ms ease-in-out;
    animation-fill-mode: forwards;
    max-height: 800px;
}

.project-card a {
    color: transparent;
    transition: 0.3s ease-in-out;
}

.project-card:hover {
    transform: translate(0, -50px);
    -webkit-transform: translate(0, -50px);
    -o-transform: translate(0, -50px);
    -moz-transform: translate(0, -50px);
}

.project-card:hover a {
    padding-top: 10px;
    font-size: 14pt;
    color: #1919ee;
    text-decoration: underline;
}

.project-link {
    position: relative;
    display: block;
    text-decoration: none;
}

.bg-transparent {
    background-color: transparent;
}

@media screen and (max-width: 600px) {
    .project-link {
        position: relative;
        display: block;
        padding-left: 120px;
        text-decoration: none;
    }
}
</style>
