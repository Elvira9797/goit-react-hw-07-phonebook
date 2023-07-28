import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid #1b1717;
  border-radius: 5px;
  padding: 20px;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media (max-width: 420px) {
    max-width: 100%;
  }
  @media (min-width: 421px) {
    width: 350px;
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #f44336;
  transition: background-color 250ms ease;
  &:hover,
  &:active {
    background-color: #e2e5e8;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Data = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
`;

export const LabelContainer = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  transition: 100ms;
`;

export const InputStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked ~ svg {
    fill: #e3474f;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const SvgStyled = styled.svg`
  position: relative;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  transition: all 0.3s;
  fill: #666;
  &:hover {
    transform: scale(1.1);
  }
`;
