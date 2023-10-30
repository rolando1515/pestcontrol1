import styled from "styled-components";

export const Style = {
    Container: styled.main`
    width: var(--width);
     max-width: var(--max-width);
   //height: 300px;
   width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
   padding-bottom: calc(50px / 2);
    background-color: var(--solid-000000, #ffffff);

    @media (max-width: 768px) {
      span {
        margin-bottom: 10px;
      }
    }

    h1{
        color: var(--solid-ffffff, #000000);
        align-self: center;
        padding-bottom: 20px;
        font-family: Open Sans;
        font-size: 40px;
        font-style: normal;
        font-weight: 700; 
        //padding-top: 60px;


    }

    h2{
        color: var(--solid-ffffff, #000000);
        align-self: center;
        font-family: Open Sans;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;     
        text-transform: capitalize;
        // padding-top: 18px;
        margin: auto;
        

    }


       
    

    p{
        color: var(--solid-ffffff, #000000);
        align-self: center;
        width: 50%;
        text-align: center;
        margin-top: 15px;
        font-family: Open Sans;
        font-size: 15px;
        font-style: normal;
        //text-align: justify;
        //padding-bottom: 20px;
      margin: auto;
        
       

    }

    .accordion__button {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .accordion__button:before {
      display: none;
    }

    .accordion__button:after {
      display: inline-block;
      content: '';
      height: 10px;
      width: 10px;
      margin-right: 12px;
      border-bottom: 2px solid currentColor;
      border-right: 2px solid currentColor;
      transform: rotate(-45deg);
  }
  
  .accordion__button[aria-expanded='true']::after,
  .accordion__button[aria-selected='true']::after {
      transform: rotate(45deg);
  }
`,
};