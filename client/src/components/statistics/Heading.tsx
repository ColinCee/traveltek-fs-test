import React from 'react'
import styled from 'styled-components'
import { Container, Image, Header, Divider } from 'semantic-ui-react'

export const Heading = () => {
  const component = ({ className, children }: any) => {
    return (
      <div className={className}>
        <Header as='h1'>
          <Image src={process.env.PUBLIC_URL + 'traveltek_logo.png'} />
          Flight Analysis
        </Header>
      </div>
    )
  }

  const StyledComponent = styled(component)`
    margin-top: 1em;
  `

  return (
    <div>
      <StyledComponent />
      <Divider />
    </div>
  )
}
