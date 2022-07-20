<template>
    <section>
  <h1>My Projects</h1>
  <div class="button-container">
    <button onclick="filterCards('All')">All</button>
    <button onclick="filterCards('HTML/CSS')">HTML/CSS</button>
    <button onclick="filterCards('JavaScript')">JavaScript</button>
    <button onclick="filterCards('Vue.JS')">Vue.JS</button>
  </div>
  <div class="project-container"></div>
</section>
</template>

<script>
let projects = [
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
];

function createCard(card) {
  let createdCard = `<div class="project-card" techStack=${card.techStack} >
      <img src="${card.imgURL}" alt="${card.imgALT}">
      <h4>${card.title}</h4>
      <h6>${card.techStack}</h6>
      <p>${card.description}</p>
      <a href="${card.githubURL}">Github</a>
      <a href="${card.liveProjectURL}">Live</a>
    </div>
  `;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".project-container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("project-card");

  if (category === "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }

  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}

</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  /*   font-size: 0.3rem; */
}

.project-container {
  display: flex;
  flex-wrap: wrap;
}

.project-card {
  width: 23%;
  margin: 1%;
}

.project-card img {
  height: 300px;
  width: 100%;
  object-fit: cover;
}

</style>