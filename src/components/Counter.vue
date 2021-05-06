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
          <span>25:00</span>
        </div>
      </div>
    </div>
    <div class="start">
      <button  @click="changeColor" class="start-btn">start</button>
    </div>
  </section>
</template>

<script>
export default {
  name:'Counter',
  methods : {
    changeColor(){
      document.querySelector('body').style.setProperty('--active-color', '#305e9b');
    }
  }
}
</script>
