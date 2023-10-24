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
      

      @media (max-width: 768px) {
        margin-bottom: 25px;
      }
    }

    h1 {
      

      @media (max-width: 768px) {
        font-size: 45px;
        line-height: 105%;
      }
    }

    p {
     

      @media (max-width: 768px) {
        margin: 15px 0;
        font-size: 16px;
      }
    }
    .background-image {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     z-index: -1;
  //   background-image: url("/pictures/pestcontrolpic.png");
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
}

    
  `,
};
