import { shallowMount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
  it('test content props', () => {
    const mockContentString = 'my content';
    const mockTitle = 'my title';

    const wrapper = shallowMount(Card, {
      propsData: {
        content: mockContentString,
        title: mockTitle,
      },
    });

    expect(wrapper.props().content).toBe(mockContentString);
  });
});
