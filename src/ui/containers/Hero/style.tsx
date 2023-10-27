import styled from 'styled-components';

export const Style = {
  Container: styled.main`
    width: var(--width);
    max-width: var(--max-width);
    height: calc(100vh - 123px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: calc(123px / 2);
    padding-right: 500px;

    span {
      @media (max-width: 768px) {
        margin-bottom: 25px;
      }
    }

    h1 {
      color: var(--solid-fefefe, #FEFEFE);
      font-size: 60px;
      text-transform: uppercase;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 45px;
        line-height: 105%;
      }
    }

    p {
      color: var(--solid-fefefe, #FEFEFE);
      font-size: 30px;
      margin: 0;

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
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      filter: brightness(40%);
    }

    ul {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
      padding-left: 0;

      li {
        color: var(--solid-fefefe, #FEFEFE);
        font-family: Open Sans;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        text-transform: capitalize;
        text-align: left;
        //padding-top: 10px;
        display: flex;
        align-items: center;
       
      }
    }
  `,
};