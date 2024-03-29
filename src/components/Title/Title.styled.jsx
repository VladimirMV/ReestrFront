import styled from 'styled-components';

export const MainTitle = styled.h1`
  
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  font-size: 22px;
  font-weight: 700;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;