import { styled } from 'styled-components';
import {
  WhatsappIcon as Icon,
  WhatsappShareButton as Button,
} from 'react-share';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding-bottom: 2px;
  border-bottom: 1px solid #7b9cd0;
  width: 100%;

  color: ${props => props.theme.colors.black};
  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: ${props => props.theme.fontSizes.s};

  @media screen and (min-width: 768px) {
    gap: 12px;
  }

  span {
    margin: 0 auto;
    text-align: center;
  }
`;

export const WrapperBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-left: 10px;
`;
export const WhatsappShareButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 50%;
  color: ${props => props.theme.colors.black};
  background-color: transparent;
  box-shadow: ${p => p.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #8e9aaf;

    svg {
      fill: ${p => p.theme.colors.white};
      stroke: ${p => p.theme.colors.black};
    }
  }

  &:active {
    background-color: ${p => p.theme.colors.white};
    svg {
      fill: ${p => p.theme.colors.black};
      stroke: ${p => p.theme.colors.white};
    }
  }
`;

export const WhatsappIcon = styled(Icon)`
  border-radius: 50%;
  box-shadow: ${p => p.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #8e9aaf;
    svg {
      fill: ${p => p.theme.colors.primary};
      stroke: ${p => p.theme.colors.black};
      box-shadow: ${p => p.theme.shadows.boxShadow};
    }
  }

  &:active {
    background-color: ${p => p.theme.colors.accent};
    svg {
      fill: ${p => p.theme.colors.black};
      stroke: ${p => p.theme.colors.white};
    }
  }
`;

export const ModalPictureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 60px;

  border-radius: 50%;
  box-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }

  @media screen and (min-width: 480px) {
    height: 40px;
    width: 40px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Info = styled.div`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  text-align: center;
`;

export const ContactDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  /* padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px; */
  padding-left: ${p => p.theme.space[1]}px;
  padding-right: ${p => p.theme.space[1]}px;
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    padding-left: ${p => p.theme.space[4]}px;
  }
`;
