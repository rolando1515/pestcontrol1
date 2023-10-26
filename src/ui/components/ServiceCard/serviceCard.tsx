import {Style} from './styles';


export function ServiceCard({
    
        title,
        detail,
        image,
        link,
        
      }: {
        title: string;
        detail: string;
        image: string;
        link: string;
       
      }) {
        return (
          <Style.Container backgroundImage={image}>
            <figure></figure>
            <hgroup>
              <h3>{title}</h3>
              <div>
              
               
              </div>
            </hgroup>
      
            <p>{detail}</p>
          </Style.Container>
        );
      }
      
      