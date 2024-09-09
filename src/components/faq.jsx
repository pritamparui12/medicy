import React, { useState } from "react";
import './faq.css'
const faqData = [

    {
        question: 'How does Medicy benefit pharmacies and diagnostic centres?',
        answer: 'Pharmacies and diagnostic centres can manage their sales, returns, stocks, appointment booking, reports, and payments effortlessly with Medicy’s user-friendly software solution. It is one of the best choices for enhanced patient-provider interactions in India.'

    },
    {
        question: 'Does Medicy have solutions for pharmacy warehouse management?',
        answer: 'Medicy offers excellent warehouse inventory management solutions for pharmacy businesses. You can manage low-stock, overstock, expiry reports, sales and purchases, supplier payments, and real-time stock updates using this software.'

    },
    {
        question: 'How do I contact the Medicy support team?',
        answer: 'You can contact the Medicy support team via email or call. You can also visit the contact page available on our site for more information.'

    },
    {
        question: 'Is Medicy capable of GST billing?',
        answer: 'Yes, Medicy is capable of filing returns with easy GST invoice generation.'
    },
    {
        question: 'Is my data safe on Medicy?',
        answer: 'The experts in Medicy focus highly on the data safety and security of pharmacies and diagnostic centres. It offers advanced encryption and reliable backup measures for distributor data, stock and payment data, and patients’ confidential information.'

    },

    {
        question: 'What are the pricing options of Medicy Software?',
        answer: 'Medicy offers affordable pricing for its software solution. You can also get discounts on seasonal offers. To know more about the pricing visit the pricing page.'


    },
]

const Faq = () => {

    return (
        <>
            <div class="text-center faq-heading"><h2 class="h1">FAQs</h2></div>
            <p class="d-flex justify-content-center align-items-center faq-text">Frequently Asked Questions</p>
            <div className="main-accordino">
                <div className="wrapper">
                    {
                        faqData.map((item, index) => {
                            return (
                                <div key={index} className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item border border-2 mb-2 rounded accordion-item" >
                                        <h2 className="accordion-header" id={`heading${index + 1}`}>
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 1}`} aria-expanded="false" aria-controls={`collapse${index + 1}`}>
                                                {item.question}
                                            </button>
                                        </h2>
                                        <div id={`collapse${index + 1}`} className="accordion-collapse collapse" aria-labelledby={`heading${index + 1}`} data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })


                    }
                </div>

            </div>





        </>

    )
}

export default Faq;

