import styled from "styled-components";

export const Style ={
    Container: styled.header`
    height: 100px;
    width: 100%;
    display: grid;
    place-items: center;
    background: var(--solid-f-18-f-01,#FEFEFE);
    
    @media (max-width: 768px) {
      span {
        margin-bottom: 10px;
      }
    }

    ul {
      list-style: none;
      display: flex;
      gap: 10px;
     //padding: 32px 50px 32 px ;
    }

    li{
        color: var(--solid-fefefe,#019EE1);
        font-family: Open Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;     
        text-transform: capitalize;
       
        
        

    }
    a{
      color: var(--solid-fefefe,#019EE1);
        font-family: Open Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;     
        text-transform: capitalize;

    }

    .company-container{
        display: flex;
        flex-direction: column  ;
        padding-right: 350px;
        





    }
    .company-name{
        font-size: 28.4px;


    }


    .restoflist{
        margin-top: 15px;
        margin-left: 2px;



    }



        `,
};