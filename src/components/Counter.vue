<template>

  <!-- Counter Body Side -->
  <section class="main-counter">

    <!-- Counter Main Side -->
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
    <!-- Counter Main Side -->

    <!-- Counter Buttons Side -->
    <div class="control-buttons">
      <div class="start">
        <button v-if="isStart" @click.prevent="startPomo" class="pomo-btn">
          start
        </button>
        <button v-else @click.prevent="stopPomo" class="pomo-btn">stop</button>
      </div>
      
    </div>
    <div v-if="isStart" class="skip">
        <a @click.prevent="skipPomo" ><i class="fas fa-forward fa-3x"></i></a>
    </div>
    <!-- Counter Buttons Side -->
    
  </section>
  <!-- Counter Main Side -->

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Counter",
  computed: {
    ...mapState({
      pMText: (state) => state.counter.pMText,
      pSText: (state) => state.counter.pSText,
      isStart: (state) => state.counter.isStart,
    }),
  },
  methods: {
    startPomo() {
      this.$store.dispatch("startPomo");
    },
    stopPomo() {
      this.$store.dispatch("stopPomo");
    },
    skipPomo(){
      this.$store.dispatch("skipPomo");
    }
  },
};
</script>
