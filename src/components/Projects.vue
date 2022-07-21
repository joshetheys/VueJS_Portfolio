<template>
    <section>
  <!-- <h1>My Projects</h1>
  <div class="button-container">
    <button onclick="filterCards('All')">All</button>
    <button onclick="filterCards('HTML/CSS')">HTML/CSS</button>
    <button onclick="filterCards('JavaScript')">JavaScript</button>
    <button onclick="filterCards('Vue.JS')">Vue.JS</button>
  </div> -->
  <!-- <div class="project-container"></div> -->
  <div class="project-container">
<div class="row">
    <div class="col-md-3" v-for="project in projects"
            :key="project">
    <div class="card" >
      <div class="card-body">
        <div class="card-content">
          <h2 class="card-title">{{project.projectName}}</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis tempora at rerum?
          </p>
          <button>Learn more &rightarrow;</button>
        </div>
      </div>
    </div>
    </div>
</div>
</div>
</section>
</template>

<script>


// function createCard(card) {
//   let createdCard = `<div class="project-card" techStack=${card.techStack} >
//       <img src="${card.imgURL}" alt="${card.imgALT}">
//       <h4>${card.title}</h4>
//       <h6>${card.techStack}</h6>
//       <p>${card.description}</p>
//       <a href="${card.githubURL}">Github</a>
//       <a href="${card.liveProjectURL}">Live</a>
//     </div>
//   `;
//   return createdCard;
// }

// function renderCards() {
//   let projectContainer = document.querySelector(".project-container");
//   for (project of projects) {
//     let card = createCard(project);
//     projectContainer.innerHTML += card;
//   }
// }

// renderCards();

// function filterCards(category) {
//   let cards = document.getElementsByClassName("project-card");

//   if (category === "All") {
//     for (card of cards) {
//       card.style.display = "block";
//     }
//     return;
//   }

//   for (card of cards) {
//     console.log(card);
//     card.style.display = "none";
//   }

//   let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

//   for (card of selectedCards) {
//     card.style.display = "block";
//   }
// }

    export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};

</script>

<style scoped>
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