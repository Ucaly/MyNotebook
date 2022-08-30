import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import { StaticImage } from 'gatsby-plugin-image'
import Title from './Title'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <Title title="このサイトについて" />
      <StaticImage
        src="../../assets/coffee_cup.jpeg"
        layout="fixed"
        width={120}
        height={120}
        alt="site"
        className="img"
      />
      <p>
        記憶力が相当あやしくなってきたので後で見返せるように記録しています。IT関係やアメリカ生活など何でもあり。
      </p>
      <SocialLinks styleClass="banner-icons"></SocialLinks>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`
export default About
