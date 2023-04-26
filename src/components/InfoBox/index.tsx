import { InfoItem } from "@components/InfoItems";
import { ButtonIcon, Container, InfoIcon } from "./style";


export function InfoBox() {
    return (
        <Container>
            <ButtonIcon>
                <InfoIcon/>
            </ButtonIcon>
            <InfoItem/>
        </Container>
    )
}