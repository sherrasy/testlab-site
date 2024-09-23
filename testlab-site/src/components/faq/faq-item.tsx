import FaqToggleIcon from '@assets/faq-toggle.svg?react';
import { useRef } from 'react';

type FaqItemProps = {
   question: string;
   answer: string;
   isOpen: boolean;
   handleClick: () => void;
};

function FaqItem({
   question,
   answer,
   isOpen,
   handleClick,
}: FaqItemProps): JSX.Element {
   const content = useRef<HTMLDivElement>(null);
   return (
      <div className={`faq-item__wrapper  ${isOpen ? 'item--active' : ''} `}>
         <button
            className={`faq-item__question-container ${isOpen ? 'faq-question--active' : ''}`}
            onClick={handleClick}
         >
            <p className='faq-item__question-content'>{question}</p>
            <FaqToggleIcon
               className={`faq-item__toggle ${isOpen ? 'toggle--active' : ''}`}
            />
         </button>
         <div
                 ref={content}
            className={`faq-item__answer-container ${isOpen ? '' : 'hidden'}`}
            style={
               isOpen
                 ? { height: content.current?.scrollHeight }
                 : { height: "0px" }
             }
           >
         
            <p className='faq-item__answer-content'>{answer}</p>
         </div>
      </div>
   );
}

export default FaqItem;
