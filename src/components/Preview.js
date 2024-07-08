import React, { useState } from 'react';
import { MdFileCopy } from 'react-icons/md';

function Preview() {
  const [image, setImage] = useState(null);
  const [inputText, setInputText] = useState('');

  function handleFileChange(e) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setImage(URL.createObjectURL(file));
      } else {
        alert('Please upload a valid image file');
      }
    }
  }

  function handleGenerateClick() {
    // Future functionality for the Generate button
    console.log('Generate button clicked');
  }

  function handleCopyClick() {
    navigator.clipboard.writeText(inputText)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch(() => {
        alert('Failed to copy text');
      });
  }

  return (
    <div className='flex justify-center align-middle'> 
      <div className="mx-80 my-20 px-4 flex shadow-neutral-700 shadow-2xl rounded-3xl justify-between bg-neutral-800 "> 
        <div className='flex flex-col align-middle justify-center mx-8 p-2'>
          {image && <img className='my-6' src={image} alt="Uploaded preview" />}
          <div className='border my-2 border-rose-500 flex justify-center'>
            <input
              className='mx-8 my-1 px-2 w-full bg-transparent focus:outline-none'
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              aria-label="Input text"
            />
            <button
              className='text-2xl p-2 border-rose-500 border-l-2'
              onClick={handleCopyClick}
              aria-label="Copy text"
            >
              <MdFileCopy />
            </button>
          </div>
          <div className='border my-2 border-rose-500 flex justify-center'>
            <input
              className='mx-8 my-1 px-2 w-30 bg-transparent focus:outline-none'
              type="file"
              onChange={handleFileChange}
              aria-label="Upload file"
            />
          </div>
          <div
            className='border my-2 border-rose-500 flex justify-center hover:cursor-pointer hover:bg-rose-500 hover:text-white'
            onClick={handleGenerateClick}
            aria-label="Generate"
          >
            <button className='text-2xl p-2'>Generate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
