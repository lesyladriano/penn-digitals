'use client'
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa6';
import Swal from 'sweetalert2';

function ContactForm() {
  const [sendLoading, setSendLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async () => {
    try {
      setSendLoading(true);

      if (name === '' || email === '' || message === '') {
        setSendLoading(false);
        Swal.fire({
          title: "Please fill in all fields",
          icon: "info",
          confirmButtonColor: "#D66D50",
        });
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setSendLoading(false);
        Swal.fire({
          title: "Invalid email format",
          icon: "warning",
          confirmButtonColor: "#D66D50",
        });
        return;
      }

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Email sent successfully",
          icon: "success",
          confirmButtonColor: "#D66D50",
        });

        setEmail('');
        setName('');
        setMessage('');
      } else {
        Swal.fire({
          title: "Failed to send email",
          icon: "error",
          confirmButtonColor: "#D66D50",
        });

        setEmail('');
        setName('');
        setMessage('');
      }

      setSendLoading(false);
    } catch (error) {
      Swal.fire({
        title: "Failed to send email",
        icon: "error",
        confirmButtonColor: "#D66D50",
      });

      setSendLoading(false);
    }
  };

  return (
    <div className='flex-col text-pstone font-poppins h-full pt-5 space-y-3'>
      <div className='w-full'>
        <div>
          Name
        </div>
        <div className='w-full'>
          <input
            className='border-b-[1px] text-black border-pstone w-full bg-transparent p-2 outline-none'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className='w-full'>
        <div>
          Email
        </div>
        <div className='w-full'>
          <input
            className='border-b-[1px] text-black border-pstone w-full bg-transparent p-2 outline-none'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className='w-full'>
        <div>
          Message
        </div>
        <div className='w-full'>
          <textarea
            className='border-b-[1px]  text-black border-pstone w-full h-auto bg-transparent p-2 outline-none'
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className='w-full flex justify-center  md:justify-end'>
      <div className='bg-pstone hover:cursor-pointer text-poppins text-white w-[5rem] h-[2rem] text-center transition duration-300 hover:bg-[#AB5740] ease-in-out flex justify-center items-center' onClick={handleSubmit}>
    {sendLoading ? (
       <FaSpinner className="animate-spin text-center"/>
    ) : (
      <span>Send</span>
    )}
  </div>
      </div>
    </div>
  );
}

export default ContactForm;
