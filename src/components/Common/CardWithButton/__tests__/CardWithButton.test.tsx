import { render, screen } from "../../../../utils/test/testUtils";

import CardWithButton from "../CardWithButton";

describe('CardWithButton', () => {
    it('renders correctly', () => {
        render(<CardWithButton title="title" buttonText="button text"/>)      
        expect(screen.getByText('title')).toBeInTheDocument()
        expect(screen.getByText('button text')).toBeInTheDocument()
    });
});