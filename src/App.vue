<template>
  <div id="app">
    <Header/>
    <!-- <Counter/> -->
    <Todo/>
  </div>
</template>

<script>
import Header from './components/Header';
// import Counter from './components/Counter';
import Todo from './components/Todo';


export default {
  name: 'App',
  components: {
    Header,Todo
  }
}
</script>

<style>
   @import './styles/main.css';
</style>
