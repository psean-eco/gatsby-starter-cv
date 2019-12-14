import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${p =>
    `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});
   bachground-color:grey   
  `}
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 20px 60px;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  color: navajowhite;
  padding-bottom: 100px;
`

class Hero extends React.Component {
  render() {
    const { title, className } = this.props

    return (
      <HeroContainer className={className}>
        <TitleContainer>
          <HeroTitle>{title}</HeroTitle>
        </TitleContainer>
      </HeroContainer>
    )
  }
}

export default styled(Hero)`
  height: 80vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
