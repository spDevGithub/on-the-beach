import { render, screen, act } from "@testing-library/react";
import { HotelDescription } from "./HotelDescription";

describe('HotelDescription', () => {
    it('should display "read more about this hotel" when to button has not been clicked', () => {
        render(<HotelDescription description='a nice hotel in the sun' />)

        expect(screen.getByText('read more', { exact: false })).toBeInTheDocument()
    })

    it('should NOT display the hotel description when the button has not been clicked', () => {
        render(<HotelDescription description='a nice hotel in the sun' />)

        expect(screen.queryByText('a nice hotel in the sun')).not.toBeInTheDocument()
    })

    it('should display "read less about this hotel" when to button has been clicked', () => {
        render(<HotelDescription description='a nice hotel in the sun' />)

        act(() => {
            screen.getByText('read more', { exact: false }).click()
        })

        expect(screen.getByText('read less', { exact: false })).toBeInTheDocument()
    })

    it('should display the hotel description when the button has been clicked', () => {
        render(<HotelDescription description='a nice hotel in the sun' />)

        act(() => {
            screen.getByText('read more', { exact: false }).click()
        })

        expect(screen.getByText('a nice hotel in the sun')).toBeInTheDocument()
    })
})