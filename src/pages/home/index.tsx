import {
  Container,
  ImagePrograming,
  Title,
  TextContent,
  Description
} from './styles'
import Programing from '@/assets/programming.svg'

export const Home = () => {
  return (
    <Container>
      <TextContent>
        <Title>Desenvolvedor Front-end</Title>
        <Description>Estou aprendendo React</Description>
      </TextContent>
      <ImagePrograming src={Programing} alt="programing" width={'500'} />
    </Container>
  )
}
