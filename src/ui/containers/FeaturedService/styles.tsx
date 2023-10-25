import styled from 'styled-components';

export const Style = {
  Container: styled.section`
    width: var(--width);
    max-width: var(--max-width);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 75px 0;


    div.projects {
      display: flex;
      justify-content: space-between;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  `,
};