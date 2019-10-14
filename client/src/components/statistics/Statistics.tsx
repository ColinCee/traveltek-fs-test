import React from "react";
import { Container, Image, Header } from "semantic-ui-react";
import styled from "styled-components";

export const Statistics: React.FC = () => {
  const heading = ({ className, children }: any) => {
    return (
      <div className={className}>
        <Header as="h1">
          <Image src={process.env.PUBLIC_URL + "traveltek_logo.png"} />
          Flight Analysis
        </Header>
      </div>
    );
  };

  const Heading = styled(heading)`
    margin-top: 1em;
  `;

  return (
    <div>
      <Container>
        <Heading />
      </Container>
    </div>
  );
};
