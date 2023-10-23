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
             <li>
                Home
             </li>
                <li>
                    About Us
                </li>
                <li>
                    Services
                </li>
                <li>
                    Contact Us
                </li>
                <li>
                    Blog
                </li>
                <li>
                    FAQ
                </li>


             
          



        </ul>
       
      </div>
      </Style.Container>
    );  
}