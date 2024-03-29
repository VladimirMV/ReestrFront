import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[0]}px;
  padding-right: ${p => p.theme.space[0]}px;
  max-width: 100%;
  width: 100%;
`;

export const Info = styled.div`
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[4]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primary};
  /* font-weight: ${p => p.theme.fontWeights.bold}; */
`;
export const InfoTable = styled.div`
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[1]}px;
  margin-left: 300px;
  /* text-align: center; */
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primary};
  /* font-weight: ${p => p.theme.fontWeights.bold}; */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;