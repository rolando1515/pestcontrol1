import styled from 'styled-components';

export const Style = {
  Container: styled.article<{ backgroundImage: string }>`
    width: 40%;
    height: 700px;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
   

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }
    // if you put .figure it will be a class, not a tag and the pic will not show up
    figure {
      width: 80%;
      height: 50%;
    //  border: 5px white solid;
      border-radius: 5px;
      background-image: url(${({ backgroundImage }) => backgroundImage});
      background-position: top;
      margin: auto;
    
     
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
      
      font-family: Open Sans;
        font-size: 28px;
        font-style: normal;
        font-weight: 700; 
      line-height: 29px;
      color: var(--solid-fefefe,#000000);
      text-align: center;
      
    }

    p {
     
      
      line-height: 24px;
      color: var(--solid-fefefe,#000000);
      margin-bottom: 7.5px;
      font-family: Open Sans;
        font-size: 15px;
        font-style: normal;
        text-align: center;
      
    }

    span {
     
      font-size: 14px;
      line-height: 24px;
      color: #6cace4;
      
    }
  `,
};
