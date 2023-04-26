import { Container, StaticInfo, TextInfo } from './style'

type Props = {
  title: string;
  subtitle: string;
}

export function DietStaticsItem({title, subtitle}:Props) {
  return (
    <Container>
      <StaticInfo>{title}</StaticInfo>
      <TextInfo>{subtitle}</TextInfo>
    </Container>
  );
}
