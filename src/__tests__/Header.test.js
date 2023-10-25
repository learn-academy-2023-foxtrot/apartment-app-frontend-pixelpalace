import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'

describe("<Header />", () => {
    it("renders a greeting to our site", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const greetingLink = screen.getByRole("link", { name: /PixelPalace/i })
        expect(greetingLink).toBeInTheDocument()
    })
})