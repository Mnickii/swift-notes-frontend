/* eslint-disable no-alert */

<template>
<div>
  <div v-if="notes && notes.length > 0">
    <div class="notes">
      <note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      />
    </div>
  </div>
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
