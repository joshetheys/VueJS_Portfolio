import { createStore } from 'vuex'

export default createStore({
    state: {
        projects: [{
                image: "https://i.postimg.cc/QdSMqxYD/To-Do-List.png",
                projectName: "To Do List App",
                aboutProject: "I created a To List App that can be used as a task manager using Javascript, HTML and CSS.",
            },
            {
                image: "https://i.postimg.cc/HsxvLSGt/Kpop-Ecommerce-Store.png",
                projectName: "Kpop Ecommerce Store",
                aboutProject: "I created a Kpop Ecommerce Store using Javascript, HTML and CSS.",
            },
            {
                image: "https://i.postimg.cc/RF21VTwg/Temperature-Convertor.png",
                projectName: "Temperature Convertor",
                aboutProject: "I created a Temperature Convertor using Javascript, HTML and CSS.",
            },
            {
                image: "https://i.postimg.cc/qqbT3zMD/Functional-Calculator.png",
                projectName: "Calculator",
                aboutProject: "I created a Functional Calculator using Javascript, HTML and CSS.",
            },
            {
                image: "https://i.postimg.cc/JzbRT7T0/Age-To-Days-Calculator.png",
                projectName: "Age to Days Calculator",
                aboutProject: "I created a calculator that when user inputes their date of birth, it will return the number of days the user has been alive for.",
            },
            {
                image: "https://i.postimg.cc/NGzC5W6j/BMI-Calculator.png",
                projectName: "BMI Calculator",
                aboutProject: "I created a BMI Calculator wherein the user inputes their weight and height which will used to return a BMI number using Javascript, HTML and CSS.",
            }
        ],
        
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})