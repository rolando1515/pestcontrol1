import styled from "styled-components";


export const Style ={
    Container: styled.header`
    height: 50px;
    width: 100%;
    display: grid;
    place-items: center;
    background: var(--solid-f-18-f-01,#019EE1 );
    
    @media (max-width: 768px) {
      span {
        margin-bottom: 10px;
      }
    }

    ul {
      list-style: none;
      display: flex;
      gap: 10px;
    }
  


    li{
        color: var(--solid-fefefe, #FEFEFE);
        font-family: Open Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;     
        text-transform: capitalize;
        

    }
        .phone-number {
        display: flex;
        align-items: center;
        
        }

        .phone-number-text {
            margin-left:5px;
        
        }

        .clock{
            display: flex;
            align-items: center;
        }

        .clock-text{
        margin-left:5px;

        }

        .location{

            display: flex;
            align-items: center;

        }
        .location-txt{

        }

        .search-box{
            display: flex;
            width: 300px;
            height: 40px;
            // padding: 5px 20px 5px 22px;
            justify-content: center;
            align-items: center;
            color:red;

        }

        .search-box input[type="text"] {
  flex: 1;
  height: 100%;
  padding: 5px;
  font-size: 16px;
}

.search-box button {
  height: 100%;
  padding: 5px 10px;
  font-size: 16px;
}




    `,
};
 