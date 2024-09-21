import { useRef } from "react";

type FaqItemProps = {
    question:string;
    answer:string;
    isOpen:boolean;
    handleClick:()=>void;
}

 function FaqItem({ question, answer, isOpen, handleClick }:FaqItemProps): JSX.Element {
    const content = useRef<HTMLDivElement>(null);
    return(
      <div className="faq-item__wrapper" >
      <button className={isOpen ? 'faq-item__question-container--active' : 'faq-item__question-container'} onClick={handleClick} >
       <p className='question-content'>{question}</p>
      </button>
           <div ref={content} className={isOpen ? 'answer-container' : 'answer-container--hidden'}>
        <p className="faq-item__answer-content">{answer}</p>
       </div>
     </div>
     )
  }
  
  export default FaqItem;