// * See: https://vuetifyjs.com/en/getting-started/unit-testing

// ? Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

// ? Components
import Home from '../../src/views/Home.vue'

// ? Utilities
import { mount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()

describe('Home.vue', () => {
  // ? Setup vuetify
  let vuetify
  let wrapper
  beforeEach(() => {
    vuetify = new Vuetify()
    wrapper = mount(Home, {
      localVue,
      vuetify
    })
  })

  it('renders the component', () => {
    wrapper.exists()
  })

  it('sets the initial result value to 0', () => {
    const resultSpan = wrapper.find('#result-text')
    expect(resultSpan.text()).toBe('0')
  })

  it('increments the result value when increment button is called', () => {
    const initialResVal = Number.parseInt(wrapper.find('#result-text').text())

    // ? Simulate button click
    wrapper.find('#inc-btn').trigger('click')

    const resValAfterInc = Number.parseInt(wrapper.find('#result-text').text())
    expect(resValAfterInc).toBe(initialResVal + 1)
  })
})
