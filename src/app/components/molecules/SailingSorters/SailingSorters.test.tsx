/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import storySnaps from 'test/utils/storySnaps'

import SailingSorters from './SailingSorters'
import * as stories from './SailingSorters.stories'

describe('app/components/molecules/SailingSorters', () => {
  describe('stories', () => {
    storySnaps(stories)
  })

  describe('interaction', () => {
    afterEach(cleanup)

    it('should call onSort when selection changes', () => {
      const onSort = jest.fn()
      expect(onSort).not.toHaveBeenCalled()
      render(<SailingSorters onSort={onSort} />)
      expect(onSort).not.toHaveBeenCalled()
      const select = screen.getByTestId('select')
      fireEvent.change(select, { target: { value: 'price' } })
      expect(onSort).toHaveBeenCalled()
      expect(onSort).toHaveBeenCalledWith('price')
    })
  })
})
