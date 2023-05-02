/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import storySnaps from 'test/utils/storySnaps'

import Index from './index'
import * as stories from './HomePage.stories'

describe('app/views/HomePage', () => {
  describe('index', () => {
    afterEach(cleanup)

    it('should wireup without crashing', () => {
      render(<Index />)
    })
  })

  describe('component', () => {
    describe('stories', () => {
      storySnaps(stories)
    })
  })
})
