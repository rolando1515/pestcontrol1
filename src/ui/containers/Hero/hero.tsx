import { Style } from './style';  

import Image from 'next/image';


export function Hero() {
  return (
    <Style.Container>
      <div className="background-image">
        <Image
          src='/pictures/man-with-tank-reservoir-his-back-spraying-disinfectant-stop-corona-virus.jpg'
          alt="Background Image"
          layout="fill"
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



