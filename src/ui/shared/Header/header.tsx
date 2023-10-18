import { ListFormat } from "typescript";    
import { Style } from "./styles";
import TelephoneIcon from "../../components/Icons/TelephoneIcon/telephoneIcon";



export function Header() {
    return (
        <Style.Container>
             <div className="header-content">
            
                <ul>
                
                <li className="phone-number">
                 
                  <TelephoneIcon /> 
                  <span>123-345-3444</span>
                  
                   
                    
                  </li>
                </ul>




              </div>
        </Style.Container>
    );
}