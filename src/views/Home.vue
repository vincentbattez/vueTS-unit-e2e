<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
import Card from '@/components/Card.vue'; // @ is an alias to /src

@Component({
  components: {
    Card,
  },
})
export default class Home extends Vue {}
</script>
