<template>
  <div class="popup" v-bind:class="getClassPopup">
    <div class="popup-inner">
      <h3>Luật chơi</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, iste
        magni corporis ducimus, aliquid repellendus architecto ipsum aliquam
        consectetur odio quisquam eaque doloribus iusto perspiciatis ratione
        itaque reprehenderit distinctio vel?
      </p>
      <button 
      v-on:click="confirm"
      class="confirm">Đã hiểu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props:{
    isOpenPopup: {
        type: Boolean,
        default: false
    }
  },
  data() {
    return {};
  },
  methods:{
    confirm(){
        this.$emit('handleConfirm')
    }
  },
  computed:{
    getClassPopup: function(){
        return{
            'open': this.isOpenPopup
        }
    },
  }
};
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  pointer-events: none;
  opacity: 0;
  transition: opacity .3s ease;
}
.popup.open {
    opacity: 1;
    pointer-events: auto;
}
.popup.open .popup-inner{
    transform: translate(-50%,-50%) scale(1);
}

.popup-inner{
    position: absolute;
    background-color: #fff;
    max-width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(.7);
    z-index: 5;
    padding: 10px;
    transition: transform .3s ease;
    font-family: Arial, Helvetica, sans-serif;
}

.popup-inner h3{
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 20px;
    color: #000;
}

.popup-inner p{
    font-size: 16px;
}

.popup .confirm{
    border: 2px solid #333;
    padding: 8px 15px;
    background-color: #fff;
    margin-top: 20px;
    cursor: pointer;
    outline: none;
    transition: .3s ease-in-out;
    font-size: 16px;
}
.popup .confirm:hover{
    background-color: #000;
    color: #fff;
}

/* Kết hợp css3 vs VueJs để cây dựng hiệu ứng - Zoom in - Zoom Out */

</style>
