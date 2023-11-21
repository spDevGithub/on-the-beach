import { act, render, screen, waitFor } from '@testing-library/react'
import { SortButton } from './SortButton.component'
import { SortByType, useAppContext } from '../../helpers/useAppContext'
import { Dispatch, SetStateAction } from 'react'

jest.mock('../../helpers/useAppContext')

const mockUseAppContext = useAppContext as jest.MockedFunction<
  typeof useAppContext
>

const mockSetter = jest.fn()

describe('SortButton', () => {
  beforeEach(() => {
    mockUseAppContext.mockReturnValue({
      sortOrder: 'priceInPence',
      setSortOrder: mockSetter as Dispatch<SetStateAction<SortByType>>,
    })
  })

  it('should set context', async () => {
    render(
      <SortButton
        label={'title'}
        text={
          <>
            sort <b>alphabetically</b>
          </>
        }
      />,
    )

    expect(
      screen.getByText('alphabetically', { exact: false }),
    ).toBeInTheDocument()

    act(() => screen.getByText('alphabetically', { exact: false }).click())

    await waitFor(() => expect(mockSetter).toHaveBeenCalledWith('title'))
  })
})
