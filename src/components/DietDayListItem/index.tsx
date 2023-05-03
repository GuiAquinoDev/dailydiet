import { Container, Divider, TimeItem, Title, Status } from './style'

export function DietDayListItem() {
    return (
        <Container>
            <TimeItem>20:00</TimeItem>
            <Divider> | </Divider>
            <Title> X-Tudo</Title>
            <Status />
        </Container>
    )
}