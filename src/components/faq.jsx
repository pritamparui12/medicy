import React, { useState } from "react";
import './faq.css'

const Faq = () => {
    const [toggle,settoggle]= useState(null)

    const handleToggle=(i)=>{
        if (toggle===i){
             return settoggle(null)
        }
        
        settoggle(i)
        
    }

    return (
        <>
            <div className="wrapper">
                <div className="heading">
                    <h1>FAQs</h1>
                    <p>Frequently Asked Questions</p>
                    </div>
                {
                    faqData.map((data, index) => {
                        return (
                            <div className='accortions' key={index}>
                                <div className="item">
                                    <div className={toggle===index ? 'titlehead': 'title'} onClick={()=>handleToggle(index)}>
                                        <h2>{data.question}</h2>
                                    </div>
                                    <div className={toggle=== index ? ' content-show': 'colapsing content'}>
                                        <p>{data.answer}</p>
                                    </div>


                                </div>

                            </div>
                        )
                    })

                }
            </div>


        </>

    )
}

export default Faq;

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
