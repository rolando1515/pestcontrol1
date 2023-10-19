import { ListFormat } from "typescript";    
import { Style } from "./styles";
import TelephoneIcon from "../../components/Icons/TelephoneIcon/telephoneIcon";
import ClockIcon from "ui/components/Icons/ClockIcon/clockIcon";
import LocationIcon from "ui/components/Icons/LocationIcon/locationIcon";



export function Header() {
    return (
        <Style.Container>
             <div className="header-content">
        <ul>
          <li className="phone-number">
            <TelephoneIcon />
            <span className="phone-number-text"> 123-345-3444</span>
          </li>

          <li className="clock">
            <ClockIcon /> 
            <span className="clock-text">  Mon - Fri 8:00 - 18:00
            </span>
             </li>
             
          <li className="location"> 
          <LocationIcon />  
          <span className="location-text">  1234 Street Adress City, State 12345  
          </span>

          </li>
          <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        </ul>
       
      </div>
    </Style.Container>
  );
}