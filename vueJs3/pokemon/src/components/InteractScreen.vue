<template>
  <div class="screen">
    <h1>Interact Component here...</h1>
    <card-flip
      v-for="(card, index) in cardsContext"
      :key="index"
      :ref="`card-${index}`"
      :imgBackFaceUrl="`images/${card}.png`"
      :card="{ index, value: card }"
      @onFlip="checkRule($event)"
    />
  </div>
</template>
<script>
import CardFlip from "./CardItem.vue";
export default {
  data() {
    return {
      rules: [],
    };
  },
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
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) {
        return false;
      }

      console.log(this.rules.length);

      this.rules.push(card);

      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("success");
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {

        console.log(this.rules);
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`].onFlipBackCard();
          this.rules = [];
        }, 800);
        // this.rules = [];
      } else {
        return false;
      }
    },
  },
};
</script>
