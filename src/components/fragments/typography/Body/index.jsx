import { Text } from "../StyledText"


export const Body = ({children}) => {
    return(
        <Text size="tiny" weight="light" color="grey">{children}</Text>
    )
}