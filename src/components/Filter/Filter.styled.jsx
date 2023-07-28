import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  gap: 5px;
`;

export const Input = styled.input`
  border-bottom: 1px solid #d6d6d6;
  border-top: none;
  border-right: none;
  border-left: none;
  font-size: 18px;
  width: 300px;
  border-radius: 0;
  margin-bottom: 15px;
  background-color: #e8e8e8;
  transition: border-bottom 0.3s ease-in-out;
  &:focus {
    outline: none;
    border-bottom: 1px solid #898989;
  }
`;
