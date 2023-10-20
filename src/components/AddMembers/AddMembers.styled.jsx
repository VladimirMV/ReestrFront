import styled from 'styled-components';

// export const MainTitle = styled.h1`
//   // margin-bottom: ${props => props.theme.space[4]}px;
//   // padding-top: ${p => p.theme.space[3]}px;
//   padding-bottom: ${p => p.theme.space[3]}px;
//   padding-left: ${p => p.theme.space[4]}px;
//   padding-right: ${p => p.theme.space[4]}px;
//   text-align: center;
//   color: ${props => props.theme.colors.white};
//   text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
//     rgba(0, 0, 0, 0.5) 1px 1px 1px;
//   font-size: 22px;
//   font-weight: 700;

//   @media screen and (min-width: 480px) {
//     font-size: ${({ theme }) => theme.fontSizes.l};
//   }
// `;

export const StyledButton = styled.button`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  border: none;
  outline: none;

  color: ${props => props.theme.colors.black};
  background-color: transparent;
  box-shadow: -2px -2px 5px #fff, 3px 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);

    svg {
      fill: ${p => p.theme.colors.black};
      stroke: ${p => p.theme.colors.black};
    }
  }

  &:active {
    background-color: ${p => p.theme.colors.white};
    box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);
    svg {
      fill: ${p => p.theme.colors.black};
      stroke: ${p => p.theme.colors.white};
    }
  }
`;

