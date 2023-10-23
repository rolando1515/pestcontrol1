import { ListFormat } from "typescript";    
import { Style } from "./styles";
import LogoIcon from "ui/components/Icons/Logo/logo";


export function HeaderLower() {
    return (
        <Style.Container>
             <div className="header-content">
        <ul>
          <li className="logo">
            <LogoIcon />
            <span className="logo-text"> 
            </span>
             </li>
             <li className="company-container">
                <span className="company-name">TermiTeck</span>
                <span className="company-n">Pest Solutions,LLC </span>
               
             </li>
             <li className="restoflist">
                Home
             </li>
             <li className="restoflist">
                    About Us
                </li>
                <li className="restoflist">
                    Services
                </li>
                <li className="restoflist">
                    Contact Us
                </li>
                <li className="restoflist">
                    Blog
                </li>
                <li className="restoflist">
                    FAQ
                </li>


             
          



        </ul>
       
      </div>
      </Style.Container>
    );  
}