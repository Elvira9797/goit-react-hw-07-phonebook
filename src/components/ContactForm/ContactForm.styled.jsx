import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const FormBox = styled.div`
  width: 400px;
  padding: 40px;
  background: rgba(24, 20, 20, 0.987);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-bottom: 25px;
  @media (max-width: 420px) {
    max-width: 100%;
  }
`;

export const ContactBox = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #fff;
  outline: none;
  background-color: transparent;
  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    left: 0;
    color: #bdb8b8;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 20px;
  letter-spacing: 4px;
  cursor: pointer;
  &:hover {
    background: #00bcd4;
    color: #fff;
    border-radius: 5px;
  }
`;

const btnAnimation = keyframes`
  0% {
     left: -100%;
   }

   50%,100% {
     left: 100%;
   }
`;

export const Span = styled.span`
  position: absolute;
  display: block;
  &: nth-of-type(1) {
    bottom: 2px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00bcd4);
    animation: ${btnAnimation} 2s linear infinite;
  }
`;

export const Div = styled.div`
  text-align: center;
  font-size: 14px;
  color: #e3474f;
`;
