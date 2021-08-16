import { mount } from '@vue/test-utils'
import SearchBar from '@/components/SearchBar.vue'

describe('SearchBar.vue', () => {
  it('test SearchBar component', () => {
    const wrapper = mount(SearchBar)
    const searchInput = wrapper.get('header input[type="text"]')
    const searchButton = wrapper.find('header button')
    
    searchInput.setValue('girls')
    searchButton.trigger('click')
    console.log(wrapper.props)
  })
})
