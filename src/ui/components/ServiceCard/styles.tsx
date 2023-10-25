import styled from "styled-components"; 

export const Style = {  
    Container: styled.article<{image: string}>`
       width: 45%;
       height: 500px;
       display: flex;
       flex-direction: column;

       @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }


  `,
};