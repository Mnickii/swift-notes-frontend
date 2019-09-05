<template>
  <div class="note">
    <h2 class="title">{{ note.title }}</h2>
    <p class="description">{{ note.description }}</p>
    <hr class="line">
  </div>
</template>
<script>

export default {
  name: 'Note',
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
  },
};
</script>

<style>
.note {
   width: 50vw;
   box-sizing: border-box;
   padding: 0.2rem;
}
.line {
  color: grey;
  size: 4px;
}
.title {
  text-decoration: none;
  color: black;
  font-size: 30px;
  font-family: 'Open Sans';
}
</style>
