import { Style } from './styles';
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
}  from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


export function Faq() {
  return (
      <Style.Container>
        <section id="faq">

       </section>
      <h1>FAQ</h1>

   
      <Accordion allowZeroExpanded>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                      <h2>Are the products used for pest control safe for humans and pets?</h2>
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                  Yes, the products we use for pest control are carefully selected to be safe for humans and pets.
                  We prioritize the well-being of your family and animals. Our technicians are trained to apply these products responsibly, 
                  following industry best practices to minimize any potential risks. Additionally, we offer eco-friendly options and can discuss
                  specific concerns you may have about the products used during our services. Your safety and the safety of your pets are our top
                  priorities.
                  </p>
              </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                      <h2>How often would I need service ?</h2>
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                  The frequency of pest control service depends on several factors, including the type of pests, 
                  the severity of the infestation, and the location of your property. For ongoing protection, many 
                  customers opt for regular, scheduled treatments on a quarterly basis. However, for more severe pest problems, 
                  monthly or bi-monthly services might be recommended initially. Our experienced technicians assess your specific
                   situation and recommend a service plan tailored to your needs. Regular inspections and preventive treatments
                    can help maintain a pest-free environment, ensuring long-term peace of mind for you and your family.
                  </p>
              </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                    <h2>What type of treatment methods do you offer ?</h2>
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                  At Control, we employ a variety of advanced treatment methods to effectively address pest issues. Our approach includes a combination of 
                  environmentally friendly techniques, targeted chemical applications, and non-toxic solutions. We emphasize integrated pest management, 
                  which means we assess each situation individually and tailor our methods accordingly. This might involve barrier treatments, baiting systems, 
                  exclusion techniques, and ongoing monitoring to ensure the pests are eradicated and do not return. Rest assured, our experienced technicians 
                  are well-versed in the latest industry standards and employ the most suitable and safe methods to protect your home or business from pests.
                  </p>
              </AccordionItemPanel>
          </AccordionItem>
      </Accordion>
  </Style.Container>  

  );
}



