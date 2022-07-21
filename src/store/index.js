import { createStore } from 'vuex'

export default createStore({
    state: {
        projects: [
            {
              imgURL: "https://picsum.photos/300?random=1",
              imgALT: "My Project 1",
              title: "My Project Title 1",
              techStack: "HTML/CSS",
              description: "lorem ipsum hello world",
              githubURL: "#",
              liveProjectURL: "#"
            },
            {
              imgURL: "https://picsum.photos/300?random=2",
              imgALT: "My Project 2",
              title: "My Project Title 2",
              techStack: "Python",
              description: "lorem ipsum Python",
              githubURL: "#",
              liveProjectURL: "#"
            },
            {
              imgURL: "https://picsum.photos/300?random=3",
              imgALT: "My Project 3",
              title: "My Project Title 45",
              techStack: "JavaScript",
              description: "lorem ipsum JS",
              githubURL: "#",
              liveProjectURL: "#"
            },
            {
              imgURL: "https://picsum.photos/300?random=23",
              imgALT: "This is cool",
              title: "Some Title",
              techStack: "JavaScript",
              description: "I made this",
              githubURL: "#",
              liveProjectURL: "#"
            },
            {
              imgURL: "https://picsum.photos/300?random=4",
              imgALT: "My Project 4",
              title: "My Project Title 4",
              techStack: "HTML/CSS",
              description: "lorem ipsum",
              githubURL: "#",
              liveProjectURL: "#"
            },
            {
              imgURL: "https://picsum.photos/300?random=5",
              imgALT: "My Project 5",
              title: "My Project Title 5",
              techStack: "Python",
              description: "This is dynamic",
              githubURL: "#",
              liveProjectURL: "#"
            },
            {
              imgURL: "https://picsum.photos/300?random=6",
              imgALT: "My Project 6",
              title: "My Project Title 6",
              techStack: "HTML/CSS",
              description: "I just created this",
              githubURL: "#",
              liveProjectURL: "#"
            },
            {
              imgURL: "https://picsum.photos/300?random=7",
              imgALT: "My Project 7",
              title: "My Project Title 7",
              techStack: "JavaScript",
              description: "Pokedex",
              githubURL: "#",
              liveProjectURL: "#"
            }
          ],
        testimonials: [{
                image: "https://i.postimg.cc/prMdzXhn/Joel.jpg  ",
                name: "Joel",
                aboutMe: "Ra'ees has a gentle personality which makes him approachable. He has great potential in front-end technologies. You will be glad to have him on your team. Joel Mukanya-Coding Lecturer.",
                level: "Lecture",
            },
            {
                image: "https://i.postimg.cc/L6RckKyP/Charles.jpg",
                name: "Abdus Samad Charles",
                aboutMe: "Ra'ees is an inquisitive person whose thirst for knowledge is second  to none.He's always eager to learn new things and use what he learned to assist others.",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.postimg.cc/JnLxwmHc/Mashalino.jpg",
                name: "Mashalino",
                aboutMe: "Even though I have known Ra'ees Benny for a short period of time at LifeChoices. He has both become my colleague and friend. He is always very helpful to his peers and pleasant to be around. His coding ability is truly on a whole different level with his brilliant ideas and excellent work ethic, he is sure to be an important asset to the workplace and team that he is apart of.",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.postimg.cc/QC6JWT40/Ridhaa.jpg",
                name: "Ridhaa",
                aboutMe: "He is a very friendly person and he is a very good web developer. He is very creative, and hard-working and will do everything to the best of his ability. Ra'ees is a great person to be around and would be a great person to have on your team.",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.postimg.cc/Df5gN9vL/Saleem.jpg",
                name: "Saleem",
                aboutMe: "Ra'ees is a hard worker , He is able  to solve any problem that he faces with full determination and dedication amongst other qualities and it is presented in his work. He goes out of his way to help others where needed.",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.postimg.cc/Df5gN9vL/Saleem.jpg",
                name: "Liam",
                aboutMe: "Ra'ees is a great guy to work with. My experience with him the work place is pleasant. He is always working hard and willing to help others.",
                level: "Colleague / Peer",
            },
        ],
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})