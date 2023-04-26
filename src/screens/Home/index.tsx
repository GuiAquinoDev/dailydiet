import { Header } from "@components/Header";
import { DietStaticsBox } from "@components/DietStaticsBox";
import { Container } from "./style";

export function Home() {
    return (
        <Container>
            <Header />
            
            <DietStaticsBox/>
        </Container>
    )
}   