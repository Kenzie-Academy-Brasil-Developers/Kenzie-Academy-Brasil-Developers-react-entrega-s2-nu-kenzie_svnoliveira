import { Text } from "../StyledText"


export const Headline = ({children}) => {
    return(
        <Text size="small" weight="light" color="grey">{children}</Text>
    )
}