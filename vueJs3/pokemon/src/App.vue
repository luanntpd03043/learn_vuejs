<template>
  <div class="wrapper">
    <main-screen
      v-if="statusMatch === 'default'"
      @onStart="onHandleBeforeStart($event)"
    />
    <interact-screen v-if="statusMatch === 'match'" :cardsContext="setting.cardsContext"/>
  </div>
</template>
<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import { shuffled } from "./utils/array";
export default {
  name: "App",
  data() {
    return {
      setting: {
        totalOfBlock: 0,
        cardsContext: [],
        startedAt: null,
      },
      statusMatch: "default",
    };
  },
  components: {
    MainScreen,
    InteractScreen,
  },
  methods: {
    onHandleBeforeStart(conf) {
      console.log(conf);
      this.setting.totalOfBlock = conf.totalOfBlock;
      const firstCards = Array.from(
        { length: this.setting.totalOfBlock / 2 },
        (_, i) => i + 1
      );
      const secondCards = [...firstCards]; //ES6 clone mảng firstCards

      const cards = [...firstCards, ...secondCards]; //Gộp 2 mảng

      this.setting.cardsContext = shuffled(shuffled(shuffled(shuffled(cards))));  //Trộn mảng

      this.setting.startedAt = new Date().getTime();

      
      this.statusMatch = "match";
    },
  },
};
</script>
