<template>
  <div id="app">
    <div class="wrapper clearfix">

        <layers
            v-bind:scorePlayer="scorePlayer"
            v-bind:currentScore="currentScore"
            v-bind:activePlayer="activePlayer"
            v-bind:isWinner="isWinner"
        />

        <controls
        v-bind:isPlaying="isPlaying"
        v-bind:finalScore="finalScore"
        v-on:handleChangeFinalScore="handleChangeFinalScore"
        v-on:handleHoldScore="holdScore"
        v-on:handleRollDice="handleRollDice"
        v-on:handleNewGame="handleNewGame"
        />

        <dices
         v-bind:dices="dices"
        />

        <popup
        v-on:handleConfirm="handleConfirm"
        v-bind:isOpenPopup="isOpenPopup"
        />
    </div>
  </div>
</template>

<script>
import Layers from './components/Players.vue';
import Controls from './components/Controls.vue';
import Dices from './components/Dices.vue';
import Popup from './components/Popup.vue';
export default {
  name: "app",
  data() {
    return {
        isPlaying: false,
        isOpenPopup: false,
        activePlayer: 0, //Người chơi hiện tại
        currentScore: 0,
        scorePlayer: [0,0],
        dices: [1,5],
        finalScore: 10
    }
  },
  components: {
    Layers,
    Controls,
    Dices,
    Popup
  },
  computed:{
    isWinner(){
      let {scorePlayer, finalScore} = this;
      if(scorePlayer[0] >= finalScore || scorePlayer[1] > finalScore){
        this.isPlaying = false;
        return true
      }
      return false;
    }
  },
  methods:{
    handleChangeFinalScore(e){
      var number = parseInt(e.target.value);

      if(isNaN(number)){
        this.finalScore = ''
      }else{
        this.finalScore = number
      }
    },
    holdScore(){
        if(this.isPlaying){
          let {scorePlayer,activePlayer,currentScore} = this;
          let scoreOld = scorePlayer[activePlayer];

          // Cách 1
          // let cloneScorePlayer = [...scorePlayer];
          // cloneScorePlayer[activePlayer] = scoreOld + currentScore;
          // this.scorePlayer = cloneScorePlayer;

          // Cách 2
          // $set thay đổi thuộc tính trong mảng
          this.$set(this.scorePlayer, activePlayer, scoreOld + currentScore);
          
          if(!this.isWinner){
            this.nextPlayer();
          }

        }else{
            alert('Vui lòng click NewGame!')
        }
    },

    nextPlayer(){
        this.activePlayer = this.activePlayer === 0 ? 1 : 0;
        this.currentScore = 0;
    },

    handleRollDice(){
        if(this.isPlaying){
           var dice1 = Math.floor(Math.random() * 6) + 1;
           var dice2 = Math.floor(Math.random() * 6) + 1;

           if(dice1 === 1 || dice2 === 1){
            let activePlayer = this.activePlayer;
            setTimeout(() => {
                alert(`Nguoi choi Player ${activePlayer + 1} da quay trung so 1.Rat tiec!`)
            }, 10);
            this.nextPlayer();
           }else{
               this.dices=[dice1,dice2];
               this.currentScore = this.currentScore + dice1 + dice2;
           }

        }else{
            alert('Vui lòng click NewGame!')
        }
    },

    handleNewGame(){
        this.isOpenPopup = true;
    },

    handleConfirm(){
        this.isPlaying = true,
        this.activePlayer = 0,
        this.scorePlayer = [0,0],
        this.currentScore = 0,
        this.dices=[1,1],
        this.isOpenPopup =  false
    },


  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url(/public/assets/img/back.jpg);
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

</style>
