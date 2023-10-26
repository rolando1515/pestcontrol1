import { Style } from './style';  
import TelephoneIcon from "../../components/Icons/TelephoneIcon/telephoneIcon";
import Image from 'next/image';


export function Hero() {
  return (
    <Style.Container>
      <div className="background-image">
        <Image
         
          src="/project_pictures/pestcontrolpic.png"
          alt="Background Image"
          layout="responsive"
          width={500} // Adjust the width as needed
          height={500} // Adjust the height as needed
          objectFit="cover"
          quality={100}
          objectPosition='center'
        />
      </div>
      <div className="content">
       
        <h1>Termiteck</h1>
        <p>We are your Pest Control Solution.</p>
        <ul> 
        <li className="phone-number">
            <TelephoneIcon />
            <a href="tel:123-345-3444" className="phone-number-text"> Call us now</a>
          </li>
      




        </ul>
       
        
        
          
        


      </div>
      </Style.Container>
  );
}



