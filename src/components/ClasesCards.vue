<template>
  <div class="RacesContainer">
    <div v-for="(item, id) in items" :key="id">
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
          <v-img :src="item.src" :alt="item.name + 'img'" height="300" />
        </div>

        <v-card-title>{{ item.name }}</v-card-title>

        <v-card-text>
          <div>{{ item.description }}</div>
        </v-card-text>

        <v-card-actions class="card-actions">
          <v-divider class="mx-4"></v-divider>
          <router-link :to="item.path">
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              See more
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
import healer from "../assets/others/healer.jpg";
import fighter from "../assets/others/fighter.jpg";
import protector from "../assets/others/protector.jpg";
import lifestealer from "../assets/others/lifestealer.jpg";

//const humans = human;
//const vampires = vampire;
//const werewolfs = werewolf;
//const fairies = fairy;
export default {
  props: {
    race: String,
  },
  created() {
    if (this.race == "human") {
      this.items = [
        {
          name: this.clases[0].name,
          description: this.clases[0].description.human,
          width: this.clases[0].width,
          path: this.clases[0].path,
          src: this.clases[0].src,
        },
        {
          name: this.clases[1].name,
          description: this.clases[1].description.human,
          width: this.clases[1].width,
          path: this.clases[1].path,
          src: this.clases[1].src,
        },
        {
          name: this.clases[2].name,
          description: this.clases[2].description.human,
          width: this.clases[2].width,
          path: this.clases[2].path,
          src: this.clases[2].src,
        },
      ];
    }
    if (this.race == "vampire") {
      this.items = [
        {
          name: this.clases[3].name,
          description: this.clases[3].description.vampire,
          width: this.clases[3].width,
          path: this.clases[3].path,
          src: this.clases[3].src,
        },
      ];
    }
    if (this.race == "fairy") {
      this.items = [
        {
          name: this.clases[0].name,
          description: this.clases[0].description.fairy,
          width: this.clases[0].width,
          path: this.clases[0].path,
          src: this.clases[0].src,
        },

        {
          name: this.clases[2].name,
          description: this.clases[2].description.fairy,
          width: this.clases[2].width,
          path: this.clases[2].path,
          src: this.clases[2].src,
        },
      ];
    }
    if (this.race == "werewolf") {
      this.items = [
        {
          name: this.clases[0].name,
          description: this.clases[0].description.werewolf,
          width: this.clases[0].width,
          path: this.clases[0].path,
          src: this.clases[0].src,
        },

        {
          name: this.clases[1].name,
          description: this.clases[1].description.werewolf,
          width: this.clases[1].width,
          path: this.clases[1].path,
          src: this.clases[1].src,
        },
      ];
    }
  },
  data: () => ({
    loading: false,
    selection: 1,
    items: [],

    clases: [
      {
        //  src: humans,
        name: "Fighter",
        description: {
          human:
            "Principally habilities in mele combat, usually use big weapons for make damage.",
          fairy:
            "Principally habilities in ranged combat, use magic for make damage and enchant weapons. ",
          werewolf:
            "Principally habilities in mele combat, use the moon power for make damage and chaos. ",
        },
        width: 80,
        src: fighter,
        path: "/fighter",
      },
      {
        // src: vampires,
        name: "Protector",
        description: {
          human: "Aqui va informacion sobre los humanos protectores...",
          werewolf: "Aqui va informacion sobre los hombre lobos protectores...",
        },
        src: protector,
        width: 40,
        path: "/protector",
      },
      {
        // src: werewolfs,
        name: "Healer",
        description: {
          human: "Aqui deberia ir una descripcion de los humanos healers.",
          fairy: "Aqui va informacion sobre las hadas healers... ",
        },
        width: 45,
        src: healer,
        path: "/healer",
      },
      {
        //src: fairies,
        name: "Lifestealer",
        description: {
          vampire: "Aqui iria una descripcion del vampiro lifestealer ",
        },
        width: 60,
        src: lifestealer,
        path: "/lifestealer",
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
