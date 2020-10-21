import React from 'react';

// styled components
import styled from 'styled-components';

// assets
import Image from './images/guitar.jpg';

// style vars
// const basicBorder = '1px solid rgba(0, 0, 0.1)';

const Card = styled.div`
  border: 1px dotted ${(props) => props.theme.primary};
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  margin: 30px auto;
  max-width: 350px;
  overflow: hidden;
  /* nested styles supported */
  img {
    max-width: 100%;
  }
  /* media queries inline supported */
  @media (max-width: 770px) {
    background-color: rgba(189, 0, 0, 0.33);
  }
`;

function SocialCard() {
  return (
    <div>
      <h3>I am social card</h3>
      <Card>
        <img src={Image} alt="EVH Guitar" />
        <p>Inside the card</p>
      </Card>
    </div>
  );
}

export default SocialCard;
