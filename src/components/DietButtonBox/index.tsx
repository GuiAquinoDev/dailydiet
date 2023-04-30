import { Container, Title } from "./style"
import { Button } from "@components/Button"

export function DietButtonBox() {
    return (
        <Container>
            <Title>Refeições</Title>
            <Button name="plus" title="Nova refeição" />
        </Container>
    )
}