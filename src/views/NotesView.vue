/* eslint-disable no-alert */

<template>
  <div v-if="notes && notes.length > 0">
    <note
      v-for="note in notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Note from '@/components/Note';

export default {
  name: 'Notes',
  components: {
    Note,
  },
  computed: {
    ...mapState('notes', ['notes']),
  },
  methods: {
  },
};
</script>
 <style>
.notes {
  background: #b1abab;
}
</style>
