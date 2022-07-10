import { render, screen } from "@testing-library/react";
import StyledButton from "../StyledButton";

describe('StyledButton', () => {
    it('renders correctly', () => {
        render(<StyledButton/>)      
        expect(screen.getByRole('button')).toBeInTheDocument()
    });
    it('renders correctly with children', () => {
        render(<StyledButton>Hello</StyledButton>)
        expect(screen.getByText('Hello')).toBeInTheDocument()
    })
});