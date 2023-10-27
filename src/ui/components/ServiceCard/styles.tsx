import styled from 'styled-components';

export const Style = {
  Container: styled.article<{ backgroundImage: string }>`
    width: 45%;
    height: 500px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }

    .figure {
      width: 100%;
      height: 55%;
      border: 5px red solid;
      background-image: url(${({ backgroundImage }) => backgroundImage});
      background-position: top;
      background-size: cover;
    }

    hgroup {
      margin: 15px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;

      div {
        width: 75px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    h3 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 29px;
      color: black;
      
    }

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: black;
      margin-bottom: 7.5px;
      
    }

    span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 24px;
      color: #6cace4;
    }
  `,
};
