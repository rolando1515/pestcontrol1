import styled from "styled-components";


export const Style ={
    Container: styled.header`
    height: 123px;
    width: 100%;
    display: grid;
    place-items: center;
    background: var(--solid-f-18-f-01, #F18F01);
    

    ul{
        list-style:none

    }
  


    li{
        color: var(--solid-fefefe, #FEFEFE);
        font-family: Open Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 170%; /* 27.2px */
        text-transform: capitalize;
    }
        .phone-number {
        display: flex;
        align-items: center;
        
        }

        .phone-number-text {
        margin-top: 53px; /* Add margin top to lower the phone number */
        }



  //  }


    `,
};