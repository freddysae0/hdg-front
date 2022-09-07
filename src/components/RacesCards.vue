<template>
  <div class="RacesContainer">
    <div v-for="(race, id) in races" :key="id">
      <v-card
        color="rgb(10,10,10)"
        dark
        :loading="loading"
        class="mx-auto my-12 card"
        max-width="374"
        min-height="540px"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <div class="flex-img">
          <img
            :src="race.src"
            :alt="race.name + 'img'"
            :width="race.width * 3"
          />
        </div>

        <v-card-title>{{ race.name }}</v-card-title>

        <v-card-text>
          <div>{{ race.description }}</div>
        </v-card-text>

        <v-card-actions class="card-actions">
          <v-divider class="mx-4"></v-divider>
          <v-btn color="deep-purple lighten-2" text @click="reserve">
            See more
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
import human from "../assets/others/human1.png";
import vampire from "../assets/others/vampire1.png";
import werewolf from "../assets/others/werewolf1.png";
import fairy from "../assets/others/fairy1.png";

const humans = human;
const vampires = vampire;
const werewolfs = werewolf;
const fairies = fairy;
export default {
  data: () => ({
    loading: false,
    selection: 1,

    races: [
      {
        src: humans,
        name: "Humans",
        description:
          "Years ago, humans came to our kingdom since theirs had been invaded by dragons. Some say they still hear them and dream of them. Though no one cares anyway.",
        width: 80,
      },
      {
        src: vampires,
        name: "Vampires",
        description:
          "No one knows how or when they came into the world. They have been here forever. They regenerate in combat, and some of their abilities can cause irreparable damage to their enemies. That is why they are feared by all the other races.",
        width: 40,
      },
      {
        src: werewolfs,
        name: "Werewolf",
        description:
          "The legend say that that race habits around all the wolrld, They are awesome warriors, But few are able to controle its power. Werewolves are loyal and trustworthy creatures, not as many believe. They are strong and powerful. His abilities increase with the phases of the moon.",
        width: 45,
      },
      {
        src: fairies,
        name: "Fairy",
        description:
          "Magical creatures that have used their powers for both good and evil, their power is fully unleashed when they fight as a team. ",
        width: 60,
      },
    ],
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Kavivanar&family=Metrophobic&display=swap");
.RacesContainer {
  font-family: "Metrophobic";

  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 10%;
  padding-right: 10%;
}
.card {
  z-index: 6;
}
.card-actions {
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 0px;
}

.flex-img {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
