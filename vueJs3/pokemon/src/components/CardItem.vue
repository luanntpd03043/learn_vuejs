<template>
  <div class="card">
    <div
      class="card_inner"
      :class="{ 'is-flipped': isFlipped }"
      @click="onToggleFlipCard"
    >
      <div class="card_face card_face--front">
        <div class="card_content"></div>
      </div>
      <div class="card_face card_face--back">
        <div
          class="card_content"
          :style="{
            backgroundImage: `url(${require('@/assets/' + imgBackFaceUrl)})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: [String, Number, Array, Object],
    },
    imgBackFaceUrl: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) {
        this.$emit("onFlip", this.card);
      }
    },
    onFlipBackCard() {
      this.isFlipped = false;
    }
  },
};
</script>

<style lang="css" scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 90px;
  height: 120px;
}
.card_inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}
.card_inner.is-flipped {
  transform: rotateY(-180deg);
}
.card_face {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
}
.card_face--back {
  background-color: var(--light);
  transform: rotateY(-180deg);
}

.card_content {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.card_face--front .card_content {
  background-image: url(../assets/images/icon_back.png);
  background-size: 40px 40px;
}

.card_face--back .card_content {
  background-size: contain;
}
</style>
