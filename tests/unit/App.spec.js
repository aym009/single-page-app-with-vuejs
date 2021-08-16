import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('test App component', () => {
    const wrapper = mount(App)
    const searchInput = wrapper.find('header input[type="text"]')
    
    expect(searchInput.exists()).toBe(true)
  })
})
