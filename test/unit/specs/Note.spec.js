import Vue from 'vue';
import Note from '@/components/Note';

describe('Note.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Note);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.note h2').textContent)
      .toEqual('Shopping List');
    expect(vm.$el.querySelector('.note p').textContent)
      .toEqual('List ABCD djnsdvkjnsvkjnsbvkjnsb');
  });
});
