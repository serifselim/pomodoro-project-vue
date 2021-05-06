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
      <button v-if="true" @click="startPomo" class="pomo-btn">start</button>
      <button  @click="stopPomo" class="pomo-btn">stop</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      pM: 5,
      pS: 0,
      pMText: 25,
      pSText: "00",
      Interval: null,
    };
  },
  methods: {
    startPomo() {
      this.Interval = setInterval(this.pomoTimer, 100);
    },

    stopPomo(){
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
        this.stopPomo();
      }

      
    },
  },
};
</script>
