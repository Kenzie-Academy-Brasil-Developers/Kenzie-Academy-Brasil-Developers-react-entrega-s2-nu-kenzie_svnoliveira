import logo from "../../assets/Nu-Kenzie-logo.png"
import { StyledHeader } from "./style"

export const Header = () => {
    return (
        <StyledHeader>
            <div id="header-container">
                <img src={logo} alt="Nu Kenzie logo, letras Nu coloridas de rosa e Kenzie colorito de preto" />
            </div>
        </StyledHeader>
    )
}