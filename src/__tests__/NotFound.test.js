import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound'

describe("<NotFound />", () => {
    it("renders a sad image", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        const notfound = screen.getByRole('heading', {
            name: /oh no!/i
          })
        expect(notfound).toBeInTheDocument()
    })
})