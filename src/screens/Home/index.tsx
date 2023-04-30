import { Header } from "@components/Header";
import { DietStaticsBox } from "@components/DietStaticsBox";
import { Container } from "./style";
import { DietButtonBox } from "@components/DietButtonBox";

export function Home() {
    return (
        <Container>
            <Header />
            
            <DietStaticsBox />
            <DietButtonBox />
        </Container>
    )
}   