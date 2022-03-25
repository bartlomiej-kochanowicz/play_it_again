import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.xxl : theme.fontSize.l};
  color: ${({ theme }) => theme.spotifyBlack};
  font-weight: ${({ theme }) => theme.bold};
  padding: 0;
  margin: 0;
`;

export default Heading;
