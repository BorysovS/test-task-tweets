import {
  BtnSpan,
  Container,
  GoLinkBtn,
  HeroText,
  HeroTitle,
  HeroWrapper,
  ImgWrapper,
} from './Home.styled';
import hero from '../../images/hero.png';
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {
  return (
    <Container>
      <ImgWrapper>
        <img src={hero} alt="meow-meow-tweet-cloud" />
      </ImgWrapper>

      <HeroWrapper>
        <HeroTitle>M-Tweets</HeroTitle>

        <HeroText>
          M-Tweets is an interactive microblogging platform that allows users to
          share their thoughts, ideas, and messages in real-time. More
          communication, more positivity, more tweets...
        </HeroText>

        <GoLinkBtn to="/tweets">
          <BtnSpan>Go tweets</BtnSpan>
          <BsArrowRight size={22} />
        </GoLinkBtn>
      </HeroWrapper>
    </Container>
  );
};

export default Home;
