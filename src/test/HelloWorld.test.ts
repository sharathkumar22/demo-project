import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld.vue'

test('mount component', async () => {
  expect(HelloWorld).toBeTruthy()

  const msg = 'Hello World'
  const wrapper = mount(HelloWorld, { props: { msg } })

  expect(wrapper.text()).toContain(msg)
})
