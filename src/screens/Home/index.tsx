import { Header } from "@components/Header";
import { InfoBox } from "@components/InfoBox";
import { Container } from "./style";

export function Home() {
    return (
        <Container>
            <Header />
            
            <InfoBox/>
        </Container>
    )
}   