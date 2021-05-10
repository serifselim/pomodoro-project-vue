<template>
  <section class="main-counter">
    <div class="counter">
      <div class="timeout">
        <button
          id="work"
          style="background-color:#fff; color:var(--active-color);"
          class="timeout-btn"
        >
          pomodoro
        </button>
        <button id="short" class="timeout-btn">short break</button>
        <button id="long" class="timeout-btn">long break</button>
      </div>
      <div class="main">
        <div class="count">
          <span>{{ pMText }}:{{ pSText }}</span>
        </div>
      </div>
    </div>
    <div class="start">
      <button v-if="isStart" @click.prevent="startPomo" class="pomo-btn">
        start
      </button>
      <button v-else @click.prevent="stopPomo" class="pomo-btn">stop</button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Counter",
  computed:{
    ...mapState({
      pMText: state => state.counter.pMText,
      pSText: state => state.counter.pSText,
      isStart: state => state.counter.isStart,
    })
  },
  methods: {
    startPomo() {
      this.$store.dispatch("startPomo");
    },
    stopPomo() {
      this.$store.dispatch("stopPomo");
    },    
  },
};
</script>
