const app = {
  hercule: {
    name: "Hercule",
    job: "Demi-dieu",
    age: 35,
    department: 75,
    arm: 60.5,
    inRelationship: true,
  },
  friendsList: ["Jupiter", "Junon", "Alcmène", "Déjanire"],

  init: () => {
    base.fillProfil(app.hercule);
    app.friends();
    app.bestFriend();
    app.setPageTitle();
    app.displayAllWorks();
    app.availability();
    app.checkAvailability();
    app.pseudo(app.hercule.name, app.hercule.department);
    app.menuToggle();
    app.formReaction();
    app.setTrends();
    app.hidden();
  },

  friends: () => {
    base.printFriends(app.friendsList);
  },

  bestFriend: () => {
    base.setBestFriend(app.friendsList[0]);
  },

  setPageTitle: () => {
    parentTitle = document.querySelector("#header-banner");
    const title = document.createElement("h1");
    title.classList.add("banner__title");
    title.textContent = "Vous consultez le profile de Hercule";
    parentTitle.appendChild(title);
  },

  displayAllWorks: () => {
    for (let i = 0; i <= 11; i++) {
      base.displayWork(i);
    }
  },

  availability: () => {
    const availability = document.querySelector("#availability");
    const hour = base.getHour();
    const isAvailable = hour >= 8 && hour < 20;
    availability.textContent = isAvailable ? "Disponible" : "Non disponible";
    const method = isAvailable ? "remove" : "add";
    availability.classList[method]("off");
  },

  checkAvailability: () => {
    setInterval(() => {
      app.availability();
    }, 60000);
  },

  pseudo: (name, region) => {
    const profilName = document.querySelector("#profil-name");
    profilName.textContent = `${name}-du-${region}`;
  },

  menuToggle: () => {
    const menuToggler = document.querySelector("#menu-toggler");
    menuToggler.addEventListener("click", () => {
      document.querySelector("#header-banner").classList.toggle("banner--open");
    });
  },

  formReaction: () => {
    const contact = document.querySelector("#contact");
    contact.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Hercule ne souhaite pas être dérangé");
    });
  },

  setTrends: () => {
    const totalVote = base.vote.hercule + base.vote.cesar;
    app.calcTrends(totalVote, "hercule");
    app.calcTrends(totalVote, "cesar");
  },

  calcTrends: (totalVote, name) => {
    const percent = Math.round((base.vote[name] / totalVote) * 100);
    const popNumber = document.querySelector(
      `#trends-${name} .people__popularity`
    );
    const popBar = document.querySelector(`#trends-${name} .people__bar`);
    popNumber.textContent = `${percent}%`;
    popBar.style.width = `${percent}%`;
  },

  hidden: () => {
    const activities = document.getElementById("activities");
    activities.classList.remove("hidden");
    const container = document.querySelector("#activities .tasks");
    for (let i = 0; i < base.activities.length; i++) {
      if (
        base.activities[i].finished &&
        base.activities[i].author === "Hercule"
      ) {
        const li = document.createElement("li");
        li.textContent = `${base.activities[i].title}`;
        li.className = "tasks__item";
        const spanElem = document.createElement("span");
        spanElem.textContent = "tâche accomplie";
        spanElem.className = "tasks__info";
        li.appendChild(spanElem);
        container.appendChild(li);
      }
    }
  },
};
document.addEventListener("DOMContentLoaded", app.init);
