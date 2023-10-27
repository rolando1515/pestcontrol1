import styled from 'styled-components';



export const Style = {
    Container: styled.main`
      width: var(--width);
      max-width: var(--max-width);
      height: calc(100vh - 123px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: calc(123px / 2);
  
      span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
  
        @media (max-width: 768px) {
          margin-bottom: 25px;
        }
     
        }
        `,
};
   