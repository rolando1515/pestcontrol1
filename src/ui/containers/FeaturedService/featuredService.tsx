import { ServiceCard } from 'ui/components/ServiceCard/serviceCard';
import { Style } from './styles';

// check linear artwork for the picture of service card. 
// https://www.alamy.com/termite-linear-icon-white-ant-thin-line-illustration-insect-pest-contour-symbol-vector-isolated-outline-drawing-image336407384.html 

const project_data = [
    {
      title: 'Residential Pest Control',
      image: '/project_pictures/insect1.png',
      
      link: '/project_pictures/insect2.png',
      detail:'Our residential pest control service is designed to protect your home and family from unwanted pests. We offer comprehensive inspections to identify any existing pest issues and implement tailored solutions to eliminate them. Whether its dealing with common household pests like ants, cockroaches, or rodents, our expert technicians ensure a pest-free environment in your home.',

        
    },
    {
      title: 'Commercial Pest Control',
      image: '/project_pictures/insect2.png',
     
      link: 'https://to-do-list-r4qd645pj-rolando1515.vercel.app/',
      detail:
        'Our commercial pest control services are tailored to businesses, including offices, restaurants, warehouses, and retail stores. We address pest issues in commercial environments, creating a clean, pest-free atmosphere for your employees and customers. Our targeted strategies effectively manage pests, promoting a healthy workplace.',
    },
    {
      title: 'Termites',
      image: '/project_pictures/insect3.png',
     
      link: 'https://to-do-list-r4qd645pj-rolando1515.vercel.app/',
      detail:
        'Protect your property from termite damage with our specialized termite control service. We identify and eliminate termite colonies, offering preventive measures to safeguard your home or business. Our advanced techniques ensure comprehensive termite eradication and long-term protection for your valuable assets.',
    },
  ];

  export function FeaturedService() {
    return (
      <Style.Container id="projects">
        <section id="services">
  
  </section>
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