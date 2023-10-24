import { Style } from './style';  

import Image from 'next/image';


export function Hero() {
  return (
    <Style.Container>
      <div className="background-image">
        <Image
         
          src="/pictures/pestcontrolpic.png"
          alt="Background Image"
          layout="responsive"
          width={500} // Adjust the width as needed
          height={500} // Adjust the height as needed
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="content">
        <span>Some text</span>
        <h1>Heading</h1>
        <p>Some paragraph</p>
      </div>
      </Style.Container>
  );
}



