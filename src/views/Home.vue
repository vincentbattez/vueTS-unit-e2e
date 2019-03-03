<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <card
      title="mon title"
      content="content"
      :modifiers="['big', 'red']"
      :tagHtml="{container: 'div', title: 'h3'}"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card/Card.vue';

@Component({
  components: {
    Card,
  },
})
export default class Home extends Vue {}
</script>
