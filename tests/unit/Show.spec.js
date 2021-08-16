import { mount } from '@vue/test-utils'
import Show from '@/components/Show.vue'

describe('Show.vue', () => {
  it('test Show component', () => {
    const wrapper = mount(Show, {
      props: {
        show: {
          id: 1,
          name: 'testName',
          genres: ['testGenres'],
          image: { medium: 'testImageUrl' },
          url: 'testUrl',
          officialSite: 'testOfficialSite'
        }
      }
    })
    
    const showItem = wrapper.find('li.show-item')

    expect(showItem.find('h4').text()).toBe('testName')
    expect(showItem.find('img').attributes()).toEqual({ alt: 'testName', src: 'testImageUrl'})
    expect(showItem.find('.genres span').text()).toBe('testGenres')
  })
})
