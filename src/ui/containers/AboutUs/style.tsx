import styled from "styled-components";

export const Style = {
    Container: styled.main`
    width: var(--width);
     max-width: var(--max-width);
   // height: 120px;
   // width: 100%;
    height: calc(100vh - 123px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: calc(123px / 2);
    background-color: var(--solid-000000, #019EE1);

    @media (max-width: 768px) {
      span {
        margin-bottom: 10px;
      }
    }

    h1{
        color: var(--solid-ffffff, #ffffff);
        align-self: center;
        padding-bottom: 20px;
        font-family: Open Sans;
        font-size: 40px;
        font-style: normal;
        font-weight: 700; 
        padding-top: 60px;


    }

    h2{
        color: var(--solid-ffffff, #ffffff);
        align-self: center;
        font-family: Open Sans;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;     
        text-transform: capitalize;
        padding-top: 18px;


    }


       
    

    p{
        color: var(--solid-ffffff, #ffffff);
        align-self: center;
        width: 50%;
        text-align: center;
        margin-top: 15px;
        font-family: Open Sans;
        font-size: 15px;
        font-style: normal;
        text-align: justify;
        padding-bottom: 20px;

        
       

    }




`,
};