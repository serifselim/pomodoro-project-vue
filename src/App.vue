<template>
  <div id="app">
    <Header/>
    <Counter/>
  </div>
</template>

<script>
import Header from './components/Header';
import Counter from './components/Counter';

export default {
  name: 'App',
  components: {
    Header,Counter
  }
}
</script>

<style>
   @import './styles/main.css';
</style>
