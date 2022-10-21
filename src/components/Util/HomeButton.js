import React from "react"
import styled from "styled-components"
import { AiOutlineHome } from "react-icons/ai"
import { Link } from "gatsby"

const HomeButton = () => {
  return (
    <Wrapper>
      <div>
        <Link to="/" >
          <AiOutlineHome className="home-icon"/>
        </Link>
        <p>
           Back to Home
        </p>
      </div>
    </Wrapper>
  )
}

// Styling Only

const Wrapper = styled.div`
  margin: 2rem 1rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
  }
  .home-icon {
    font-size: 3rem;
    background: transparent;
    border: transparent;
    margin-right: 1rem;
    cursor: pointer;
    color: var(--clr-primary-5);
  }
  p {
    margin-bottom: 0;
    font-weight: 500;
    font-size: 1.0rem;
  }
`
export default HomeButton
