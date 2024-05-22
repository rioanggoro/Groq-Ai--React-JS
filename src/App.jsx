import './App.css';
import { useState } from 'react';
import { requestToGroqAI } from './utils/groq';
import { Light as SyntaxHighlight } from "react-syntax-highlighter";
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
  const [content, setContent] = useState(''); // Deklarasikan state untuk content
  const [data, setData] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ai = await requestToGroqAI(content); // Gunakan content state di sini
    setData(ai);
  };

  return (
    <main className='flex flex-col min-h-[80vh] justify-center items-center'>
      <h1 className='text-4xl text-indigo-500'>Groq | Ai</h1>
      <form className='flex flex-col gap-4 py-4' onSubmit={handleSubmit}>
        <input
          placeholder='Masukkan Permintaan...'
          className='py-2 px-4 text-md rounded-md'
          value={content}
          onChange={(e) => setContent(e.target.value)} // Update state content
          type='text'
        />
        <button
          type='submit'
          className='bg-indigo-500 py-2 px-4 font-bold text-white rounded-md'>
          Kirim
        </button>
      </form>
      <div className='w-full px-4'>
        <SyntaxHighlight language='swift' style={darcula} className='text-left'>
          {data ? data.toString() : ''}
        </SyntaxHighlight>
      </div>
    </main>
  );
}

export default App;
