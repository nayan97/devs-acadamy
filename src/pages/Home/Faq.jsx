import React from 'react';
import { motion } from "motion/react";

const Faq = () => {
    return (
        <div>
                 <div id="faq"  className="w-full mx-auto px-6 rounded-xl my-2 overflow-hidden py-12 mb-24">

                <div  className="text-center py-12">
                    <h3  className="text-[#00BCFF] text-4xl font-bold">Frequently <span 
      
            >Asked Questions</span></h3>
                </div>
                
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">
    What types of courses are available on this platform?
  </div>
  <div className="collapse-content text-sm">
    We offer a variety of courses including Web Development, Data Science, Digital Marketing, UI/UX Design, and more — from beginner to advanced levels.
  </div>
</div>

<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">
    Can I get a certificate after completing a course?
  </div>
  <div className="collapse-content text-sm">
    Yes, after successfully completing a course and its assessments, you will receive a downloadable and verifiable certificate.
  </div>
</div>

<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">
    How do live classes work?
  </div>
  <div className="collapse-content text-sm">
    Live classes are scheduled sessions conducted via Zoom or Google Meet. You'll get a notification and join link before each session.
  </div>
</div>

<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">
    Are the courses self-paced or instructor-led?
  </div>
  <div className="collapse-content text-sm">
    We offer both self-paced courses that you can complete anytime, and instructor-led programs with live interactions and deadlines.
  </div>
</div>

<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">
    Is there any support available if I face issues during a course?
  </div>
  <div className="collapse-content text-sm">
    Yes, you can reach out to our support team via live chat, email, or community forums. Instructors also provide direct feedback on assignments.
  </div>
</div>

                        
                </div>

     
        </div>
    );
};

export default Faq;