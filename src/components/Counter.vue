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
      pM: 25,
      pS: 0,
      pMText: 25,
      pSText: "00",
      pCount: 0,
      pTarget: 4,

      work: 25,
      short: 5,
      long: 15,

      pFinishedCount: 1,
      pIntervalArr: [],
      Interval: null,
      isStart: true,
    };
  },
  created() {
    this.pIntervalArr = this.workingOrder(this.pTarget,this.work,this.short,this.long);
    console.log(this.pIntervalArr);
  },
  methods: {
    startPomo() {
      this.isStart = false;
      this.Interval = setInterval(this.pomoTimer, 3);
    },

    stopPomo() {
      this.isStart = true;
      clearInterval(this.Interval);
    },

    pomoTimer() {
      if (this.pS <= 0) {
        this.pM--;
        this.pM < 10 ? (this.pMText = "0" + this.pM) : (this.pMText = this.pM);

        this.pS = 59;
        this.pSText = this.pS;
      } else {
        this.pS--;
        this.pS < 10 ? (this.pSText = "0" + this.pS) : (this.pSText = this.pS);
      }
      if (this.pM <= 0 && this.pS <= 0) {
        this.isStart = true;
        this.pCount < (this.pTarget * 2 - 1) ? this.pCount++ : (this.pCount = 0);
        this.nextStage(this.pCount);
        this.stopPomo();
      }
    },
    nextStage(pCount) {
      console.log("C :" + pCount);
      switch (this.pIntervalArr[pCount]) {
        case 25:
          this.pFinishedCount++;
          console.log("F :" + this.pFinishedCount);
          this.changeColor("#DB524D");
          break;
        case 5:
          this.changeColor("#31b853");
          break;
        default:
          this.changeColor("#305e9b");
          break;
      }
      this.pM = this.pIntervalArr[pCount];
      this.pM < 10 ? (this.pMText = "0" + this.pM) : (this.pMText = this.pM);
    },

    workingOrder(pTarget,work,short,long){
      let arr = [];
      
      for (let i = 0; i < pTarget + 1; i++) {
      if (i < pTarget) {
        arr.push(work);
        arr.push(short);
      }else {
        arr.splice(-1,1);
        arr.push(long);
        }
      }
        return arr;
    },

    changeColor(color) {
      document.documentElement.style.setProperty("--active-color", color);
    },

    // zeroAddTime(time,text){
    //   time < 10 ? text = "0" + time : text = time;
    // }
  },
};
</script>
