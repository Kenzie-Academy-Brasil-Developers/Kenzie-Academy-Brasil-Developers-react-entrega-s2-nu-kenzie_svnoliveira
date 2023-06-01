import { Text } from "../StyledText"


export const StyledPrice = ({children}) => {
    return(
        <Text size="small" weight="bold" color="pink">{children}</Text>
    )
}