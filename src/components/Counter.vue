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
      pFinishedCount : 0,
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
      console.log("pCount" + pCount);
      if (this.pSettings[pCount] === this.pSettings[0]) {
        this.pFinishedCount++;
      }
      this.pM = this.pSettings[pCount];
      this.pM < 10 ? this.pMText = "0" + this.pM : this.pMText = this.pM;
    },

    // zeroAddTime(time,text){
    //   time < 10 ? text = "0" + time : text = time;
    // }
  },
};
</script>
