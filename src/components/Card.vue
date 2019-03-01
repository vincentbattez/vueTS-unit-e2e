<template>
  <component
    :is="tagHtml.container"
    :class="`${COMPONENT_CLASS}${modifierClass}`"
  >
    <div :class="`${COMPONENT_CLASS}__title`">
      <component :is="tagHtml.title">{{ title }}</component>
    </div>
    <div :class="`${COMPONENT_CLASS}__content`">
      <p>{{ content }}</p>
    </div>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
const COMPONENT_CLASS = 'card';

@Component
export default class Card extends Vue {
  @Prop()
  private content!: string;

  @Prop()
  private title!: string;

  @Prop()
  private modifier!: string;
  
  @Prop({
    default: {
      container: 'article',
      title: 'h3'
    }
  })
  private tagHtml!: object;

  get COMPONENT_CLASS() {
    return COMPONENT_CLASS;
  }

  get modifierClass() {
    if (!this.modifier) {
      return '';
    }
    return ` ${COMPONENT_CLASS}--${this.modifier}`;
  }
}
</script>

<style scoped lang="scss">
$COMPONENT_CLASS: 'card';

.#{$COMPONENT_CLASS} {
  max-width: 300px;
  margin: 0 auto;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, .3);
  padding: 10px 20px;

  &__title {
    font-size: 20px;
  }

  &__content {
    font-size: 16px;
  }
}
</style>
