<template>
  <div class="wrapper">
    <main-screen
      v-if="statusMatch === 'default'"
      @onStart="onHandleBeforeStart($event)"
    />
    <interact-screen 
    v-if="statusMatch === 'match'" 
    :cardsContext="setting.cardsContext"
    @onFinish="onGetResult"
    />
    <result-screen 
    v-if="statusMatch === 'result'" 
    :timer="timer"
    @onStartAgain="onStart"
    />
    <copy-right/>
  </div>
</template>
<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import ResultScreen from "./components/ResultScreen.vue";
import CopyRight from "./components/CopyRight.vue";
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
      timer: 0
    };
  },
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
    CopyRight,
  },
  methods: {
    onHandleBeforeStart(conf) {
    
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
    onGetResult(){
      // get Timer
      this.timer = new Date().getTime() - this.setting.startedAt;
      // switch to result component
      this.statusMatch = "result";
    },
    onStart(){
      this.statusMatch = 'default';
    }
  },
};
</script>
