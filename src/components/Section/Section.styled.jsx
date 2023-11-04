import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${props => props.theme.space[1]}px;
  padding-bottom: ${props => props.theme.space[1]}px;
  // padding-bottom: 20px;
  // margin-bottom: 5px;
  max-width: 100%;
  width: 100%;
  border-radius: 15px;
  background-color: #f1f1f1;
  color: ${props => props.theme.colors.black};
  text-shadow: 0 -0.4px 0.4px #ffffff, 0.4px 0.4px 0.4px #00000031;
`;
