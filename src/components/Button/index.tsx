import { Container, Title, Icon } from "./style";

type Props = {
  name: string;
  title: string
}

export function Button({ name, title }: Props) {
  return (
    <Container>
      <Icon name={name} />
      <Title>{ title }</Title>
    </Container>
  );
}
