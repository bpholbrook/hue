// Hues test
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Hues from './index.js'
import hues from '../../data'

const huesComponent = <Hues hues={hues} />

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(huesComponent, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches the snapshot', () => {
  const component = renderer.create(huesComponent)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})