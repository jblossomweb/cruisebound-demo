/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import storySnaps from 'test/utils/storySnaps'

import Dropdown from './Dropdown'
import * as stories from './Dropdown.stories'

describe('app/components/atoms/Dropdown', () => {
  describe('stories', () => {
    storySnaps(stories)
  })

  describe('interaction', () => {
    afterEach(cleanup)

    it('should call onSelect when selection changes', () => {
      const options = [
        { display: 'Foo', value: 'foo' },
        { display: 'Bar', value: 'bar' },
        { display: 'Buzz', value: 'buzz' },
      ]
      const onSelect = jest.fn()
      expect(onSelect).not.toHaveBeenCalled()
      render(<Dropdown options={options} onSelect={onSelect} />)
      expect(onSelect).not.toHaveBeenCalled()
      const select = screen.getByTestId('select')
      fireEvent.change(select, { target: { value: 'buzz' } })
      expect(onSelect).toHaveBeenCalled()
      expect(onSelect).toHaveBeenCalledWith('buzz')
    })
  })
})
