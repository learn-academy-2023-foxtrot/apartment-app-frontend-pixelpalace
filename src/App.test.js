import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';

describe ("<App />", () => {
    it("renders the welcome page", () => {
        render(
          <BrowserRouter> 
            <App />
          </BrowserRouter>
        );
        const welcome = screen.getByRole("link", {
            name: /apartments/i
        });
        expect(welcome).toBeInTheDocument();

    })
});

