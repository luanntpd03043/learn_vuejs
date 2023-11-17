<template>
  <div class="screen">
    <div
      class="screen_inner"
      :style="{
        width: `${
          ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 +
            16) * Math.sqrt(cardsContext.length)
        }px`
      }"
    >
      <card-flip
        v-for="(card, index) in cardsContext"
        :key="index"
        :ref="`card-${index}`"
        :imgBackFaceUrl="`images/${card}.png`"
        :card="{ index, value: card }"
        :cardsContext="cardsContext"
        :rules="rules"
        @onFlip="checkRule($event)"
      />
    </div>
  </div>
</template>
<script>
import CardFlip from "./CardItem.vue";
export default {
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    CardFlip,
  },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;
    
      this.rules.push(card);

      if(this.rules.length === 2 && this.rules[0].index === this.rules[1].index){
        this.rules = [];
      }else if (this.rules.length === 2 && this.rules[0].value === this.rules[1].value) {
        this.$refs[`card-${this.rules[0].index}`][0].onEnableDisableMode();
        this.$refs[`card-${this.rules[1].index}`][0].onEnableDisableMode();
        this.rules = [];

        const disableElement = document.querySelectorAll(
          ".screen .card.disable"
        );
        if (
          disableElement &&
          disableElement.length === this.cardsContext.length - 2
        ) {
          setTimeout(() => {
            this.$emit("onFinish");
          }, 950);
        }
      } else if (this.rules.length === 2 && this.rules[0].value !== this.rules[1].value) {
        console.log(this.rules);
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`][0].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard();
          this.rules = [];
        }, 800);
      } else return false;

    },
  },
};
</script>

<style lang="css" scoped>
.screen {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--dark);
  color: var(--light);
}

.screen_inner {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto 3rem;
  column-gap: 1rem;
  row-gap: 1rem;
}
</style>
