import { ButtonContainer } from "./styles"

export const Button = ({children, ...rest}) => {
    return (
        <ButtonContainer type="submit" {...rest}>
            {children}
        </ButtonContainer>
    )
}