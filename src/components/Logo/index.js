import styled from 'styled-components';

const Logo = styled.img`
  margin: 15px;
  max-width: 18vw;
  filter: brightness(0);

  @media (min-width: 768px) {
    max-width: 10vw;
  }
`;

Logo.displayName = 'Logo';

export default Logo;
