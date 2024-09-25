import { useState } from "react";
import FaqItem from "./faq-item";
import { faqData } from "@utils/mockData/faq-data";

function Faq(): JSX.Element {
    const [activeIndex, setActiveIndex] = useState<number|null>(0);

    const handleItemClick = (i:number) => {
     setActiveIndex((prev) => (prev === i ? null : i));
    };

    return (
      <div className='faq' id='faq'>
        <h2 className="faq__title">Вопросы и ответы</h2>
        <div className="faq__accordeon">
                {faqData.map(({id, question, answer}) => (
                    <FaqItem
                    key={id}
                    question={question}
                    answer={answer}
                    isOpen={activeIndex === id}
                    handleClick={() => handleItemClick(id)}
                    />
                ))}            
        </div>
      </div>
    );
  }
  
  export default Faq;

