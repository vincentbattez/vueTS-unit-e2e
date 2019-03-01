<template>
  <component
    :is="tagHtml.container"
    :class="[COMPONENT_CLASS, modifiersClass]"
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

interface HtmlTagInterface {
  container: string;
  title: string;
}

@Component
export default class Card extends Vue {
  @Prop({
    type: String,
    required: true,
  }) private content!: string;

  @Prop({
    type: String,
    required: true,
  }) private title!: string;

  @Prop({
    type: [String, Array],
    validator: (modifiers) => {
      return modifiers && modifiers.length;
    },
  }) private modifiers!: string | string[];

  @Prop({
    type: Object as () => HtmlTagInterface,
    default: () => {
      return {
        container: 'article',
        title: 'h3',
      };
    },
  }) private tagHtml!: object;

  // Computed
  get COMPONENT_CLASS(): string {
    return COMPONENT_CLASS;
  }

  get modifiersClass(): string | string[] {
    // @string empty string modifiers when empty array or undefined modifiers
    if (!this.modifiers || !this.modifiers.length) {
      return '';
    }

    // @string[] modifiers if is array
    if (Array.isArray(this.modifiers)) {
      return this.modifiers.map((modifier) => {
        return `${COMPONENT_CLASS}--${modifier}`;
      });
    }

    // @string modifiers by default
    return `${COMPONENT_CLASS}--${this.modifiers}`;
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
  
  &--big {
    min-width: 600px;
  }

  &__title {
    font-size: 20px;
  }

  &__content {
    font-size: 16px;
  }
}
</style>
