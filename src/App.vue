<template>
  <div id="app">
    <div class="name"><h2 class="text">Swift Notes</h2></div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  created() {
    this.$store.dispatch('notes/loadNotes');
  },
};
</script>

<style>
#app {
  text-align: center;
  background: #b1abab;;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
body {
  margin: 0;
  padding: 0;
  background-color: #b1abab;
}
.name {
  flex-basis: 100%;
}
.text {
  font-size: 30px;
  font-weight: bold;
  font-family: 'Open Sans';
}
</style>
