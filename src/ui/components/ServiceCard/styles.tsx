import styled from 'styled-components';

export const Style = {
  Container: styled.article<{ backgroundImage: string }>`
    width: 40%;
    height: 750px;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
   

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }
    // if you put .figure it will be a class, not a tag and the pic will not show up
    figure {
      width: 100%;
      height: 60%;
      border: 5px white solid;
      border-radius: 5px;
      background-image: url(${({ backgroundImage }) => backgroundImage});
      background-position: top;
     
      background-size: cover;
    }

    hgroup {
      margin: 20px ;
      //display: flex;
      //align-items: center;
     // justify-content: space-between;
      //text-align: center;

      div {
        width: 75px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    h3 {
      
      font-size: 30px;
      line-height: 29px;
      color: var(--solid-fefefe,#000000);
      text-align: center;
      
    }

    p {
     
      font-size: 18px;
      line-height: 24px;
      color: var(--solid-fefefe,#000000);
      margin-bottom: 7.5px;
      align-items: center;
      
    }

    span {
     
      font-size: 14px;
      line-height: 24px;
      color: #6cace4;
      
    }
  `,
};
