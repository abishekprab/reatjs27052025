import { useState } from 'react'
import './FaqAccordion.css'

// FAQs — 
const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is a component?",
    answer: "A component is a reusable piece of UI in a React application.",
  },
  {
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It lets you write HTML inside JS.",
  },
]

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  // Toggle which FAQ is open
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div
            className="faq-question"
            onClick={() => toggleFaq(index)}
          >
            {item.question}
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FaqAccordion
