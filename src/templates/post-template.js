import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Banner from '../components/Banner'
import HomeButton from '../components/Util/HomeButton'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date },
      body,
    },
  } = data
  console.log('image=', image);
  return (
    <Layout>
      <Hero />
      <Wrapper>
        {/* post info */}
        <article>
          {
            image && <GatsbyImage
            image={getImage(image)}
            alt={title}
            className="main-img"
          />
          }
          <div className="post-info">
            <span>{category}</span>
            <h2>{title}</h2>
            <p>{date}</p>
            <div className="underline"></div>
          </div>
          <MDXRenderer >{body}</MDXRenderer>
          <HomeButton />
        </article>
        {/* banner component */}
        {/* <article>
          <Banner />
        </article> */}
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
        slug
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

const Wrapper = styled.section`
  width: 90vw;
  max-width: 1500px;
  margin: 0 auto;
  margin-bottom: 4rem;

  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .main-img {
      width: 50%;
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 4rem;
    }
  }
`

export default PostTemplate
