import { Header } from "@components/Header";
import { DietStaticsBox } from "@components/DietStaticsBox";
import { Container } from "./style";
import { Button } from "@components/Button";

export function Home() {
    return (
        <Container>
            <Header />
            
            <DietStaticsBox />
            <Button name="plus" title="Nova refeição" />
        </Container>
    )
}   