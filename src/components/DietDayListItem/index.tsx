import { Container, Divider, TimeItem, Title, Status } from './style'

type Props = {
    food: string;
}

export function DietDayListItem({ food }: Props) {
    return (
        <Container>
            <TimeItem>20:00</TimeItem>
            <Divider> | </Divider>
            <Title> { food }</Title>
            <Status />
        </Container>
    )
}