import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from 'components/atoms/Input/Search';
import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Icon from 'components/atoms/Icon/Icon';

const ParagraphLink = styled(Link)`
  color: white;
  text-decoration-line: underline;
  font-weight: ${({ theme }) => theme.font.light};
  cursor: pointer;
`;
const StyledCopyrights = styled.div`
  flex-basis: 100%;
`;
const StyledSecondWrapper = styled.div`
  a {
    display: block;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
  }
`;
const StyledSocialWrapper = styled.div`
  i {
    font-size: ${({ theme }) => theme.font.xl};
    background-color: white;
    color: ${({ theme }) => theme.black};
    border-radius: 50%;
  }
  i:hover {
    color: white;
    background-color: ${({ theme }) => theme.black};
  }
`;
const StyledSearchWrapper = styled.div`
  input {
    margin: 0px auto;
  }
`;
const StyledFooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${({ theme }) => theme.black};
  color: white;
  text-align: center;
  padding: 20px 0px;
  div {
    flex-grow: 1;
    margin: 0px 10px;
    flex-basis: 26%;
  }
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    flex-direction: row;
  }
`;

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledSearchWrapper>
        <Headline as="h3" white>
          Wyszukiwarka::
        </Headline>
        <Search placeholder="Wyszukaj wpis który zawiera..." />
      </StyledSearchWrapper>
      <StyledSecondWrapper>
        <Headline as="h3">Email: szyszaqaz@o2.pl</Headline>
        <Headline as="h4">Przydatne Linki:</Headline>
        <ParagraphLink as={Link} to="/wszystkie-wpisy">
          Wszystkie wpisy
        </ParagraphLink>
        <ParagraphLink as={Link} to="/regulamin">
          Polityka prywatności i regulamin
        </ParagraphLink>
        <Paragraph as="a" link white light>
          Jako programista (portfolio)
        </Paragraph>
      </StyledSecondWrapper>
      <div>
        <Headline as="h3">Pojawiam się również tam:</Headline>
        <StyledSocialWrapper as="a" href="https://www.instagram.com">
          <Icon className="icon-instagram" as="i" />
          <Headline as="h4">Instagram</Headline>
        </StyledSocialWrapper>
        <StyledSocialWrapper as="a" href="https://www.instagram.com">
          <Icon className=" icon-youtube-play" as="i" />
          <Headline as="h4">Youtube</Headline>
        </StyledSocialWrapper>
        <StyledSocialWrapper as="a" href="https://www.instagram.com">
          <Icon className="icon-mic" as="i" />
          <Headline as="h4">Podcast</Headline>
        </StyledSocialWrapper>
      </div>
      <StyledCopyrights>Copyrights 2019 by Kamil Chędkowski</StyledCopyrights>
    </StyledFooterWrapper>
  );
};

export default Footer;
