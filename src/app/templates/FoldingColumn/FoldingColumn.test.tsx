/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import storySnaps from 'test/utils/storySnaps'

import FoldingColumn, { type FoldingColumnProps } from './FoldingColumn'
import styles from './FoldingColumn.module.css'
import * as stories from './FoldingColumn.stories'

describe('app/templates/FoldingColumn', () => {
  describe('stories', () => {
    storySnaps(stories)
  })

  describe('interaction', () => {
    afterEach(cleanup)

    it('should start out as expanded', () => {
      const { asFragment } = render(
        <FoldingColumn {...(stories.Sample.args as FoldingColumnProps)} />
      )
      expect(asFragment()).toMatchSnapshot()
      const leftColBefore = screen.getByTestId('left-col')
      expect(leftColBefore.className).toContain(styles.expanded)
    })

    it('should collapse left column when arrow is clicked', () => {
      const { asFragment } = render(
        <FoldingColumn {...(stories.Sample.args as FoldingColumnProps)} />
      )
      const button = screen.getByRole('button')
      expect(asFragment()).toMatchSnapshot()
      const leftColBefore = screen.getByTestId('left-col')
      expect(leftColBefore.className).toContain(styles.expanded)
      fireEvent.click(button)
      expect(asFragment()).toMatchSnapshot()
      const leftColAfter = screen.getByTestId('left-col')
      expect(leftColAfter.className).not.toContain(styles.expanded)
    })
  })
})
