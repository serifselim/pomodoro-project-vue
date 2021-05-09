<template>
  <section class="main-counter">
    <div class="counter">
      <div class="timeout">
        <button class="timeout-btn">pomodoro</button>
        <button class="timeout-btn">short break</button>
        <button class="timeout-btn">long break</button>
      </div>
      <div class="main">
        <div class="count">
          <span>{{ pMText }}:{{ pSText }}</span>
        </div>
      </div>
    </div>
    <div class="start">
      <button v-if="isStart" @click="startPomo" class="pomo-btn">start</button>
      <button v-else @click="stopPomo" class="pomo-btn">stop</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      pM: 10,
      pS: 0,
      pMText: 25,
      pSText: "00",
      pCount : 0,
      pFinishedCount : 1,
      pSettings : [25,5,25,5,25,5,25,15],
      Interval: null,
      isStart : true,
    };
  },
  methods: {
    startPomo() {
      this.isStart = false;
      this.Interval = setInterval(this.pomoTimer, 10);
    },

    stopPomo(){
      this.isStart = true;
      clearInterval(this.Interval);
    },

    pomoTimer() {
      
      if (this.pS <= 0) {
        this.pM--;
        this.pM < 10 ? this.pMText = "0" + this.pM : this.pMText = this.pM;

        this.pS = 59;
        this.pSText = this.pS;
      }else{
        this.pS--;
        this.pS < 10 ? this.pSText = "0" + this.pS : this.pSText = this.pS;
      }
      if(this.pM <= 0 && this.pS <= 0){
        this.isStart = true;
        this.pCount < 7 ? this.pCount++ : this.pCount = 0;
        this.nextStage(this.pCount);
        this.stopPomo();
      }
    },
    nextStage(pCount){
      switch (this.pSettings[pCount]) {
        case 25:
          this.pFinishedCount++;
          this.changeColor('#DB524D');
          break;
        case 5:
          this.changeColor('#31b853');
          break;
        default:
          document.documentElement.style.setProperty('--active-color', '#305e9b');
          this.changeColor('#305e9b');
          break;
      }
      this.pM = this.pSettings[pCount];
      this.pM < 10 ? this.pMText = "0" + this.pM : this.pMText = this.pM;
    },

    changeColor(color){
      document.documentElement.style.setProperty('--active-color', color);
    }

    // zeroAddTime(time,text){
    //   time < 10 ? text = "0" + time : text = time;
    // }
  },
};
</script>
