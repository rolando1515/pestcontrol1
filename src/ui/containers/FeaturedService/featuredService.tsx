import { ServiceCard } from 'ui/components/ServiceCard/serviceCard';
import { Style } from './styles';

// check linear artwork for the picture of service card. 
// https://www.alamy.com/termite-linear-icon-white-ant-thin-line-illustration-insect-pest-contour-symbol-vector-isolated-outline-drawing-image336407384.html 

const project_data = [
    {
      title: 'Vroom Stock App',
      image: "/project_pictures/pestcontrolpic.png",
      
      link: 'https://rolando1515-vroomstockpriceapp-myapp-s6gjuc.streamlit.app/',
      detail:
        'Python-based Stock Price Web Application. Using Streamlit and yfinance libraries, this app fetches company information and real-time stock prices for S&P 500 companies. With less than 50 lines of code.',
    },
    {
      title: 'To do list',
      image: '/project_pictures/insect2.png',
     
      link: 'https://to-do-list-r4qd645pj-rolando1515.vercel.app/',
      detail:
        'A simple to do list app made with HTML,CSS and JavaScript. Its fast, responsive, and uses local storage to keep data secure.',
    },
    {
      title: 'To do list',
      image: '/project_pictures/insect3.png',
     
      link: 'https://to-do-list-r4qd645pj-rolando1515.vercel.app/',
      detail:
        'A simple to do list app made with HTML,CSS and JavaScript. Its fast, responsive, and uses local storage to keep data secure.',
    },
  ];

  export function FeaturedService() {
    return (
      <Style.Container id="projects">
        <h2></h2>
        <div className="projects">
          {project_data.map(({ detail, title, image, link,  }) => (
            <ServiceCard
              key={title}
              detail={detail}
              title={title}
              image={image}
              link={link}
              
            />
          ))}
        </div>
      </Style.Container>
    );
  }