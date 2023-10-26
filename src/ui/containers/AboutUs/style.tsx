import styled from "styled-components";

export const Style = {
    Container: styled.main`
    //width: var(--width);
    //max-width: var(--max-width);
    height: 30px;
    width: 100%;
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
        padding-bottom: 100px;


    }

    h2{
        color: var(--solid-ffffff, #ffffff);
        align-self: center;
       


    }

    ul {
      list-style: none;
      display: flex;
      gap: 10px;
     //padding: 32px 50px 32 px ;
    }   

    li{
        color: var(--solid-ffffff, #ffffff);
        align-self: center;
        width: 50%;
        text-align: center;
        margin-top: 10px;
       
    }

    p{
        color: var(--solid-ffffff, #ffffff);
        align-self: center;
        width: 50%;
        text-align: center;
        margin-top: 10px;

    }




`,
};