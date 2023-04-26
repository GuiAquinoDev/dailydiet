import { DietStaticsItem } from "@components/DietStaticsItem";
import { ButtonIcon, Container, InfoIcon } from "./style";

export function DietStaticsBox() {
  return (
    <Container>
      <ButtonIcon>
        <InfoIcon />
      </ButtonIcon>
      <DietStaticsItem title="90,86%" subtitle="das refeições dentro da dieta"/>
    </Container>
  );
}
