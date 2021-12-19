import React, { useState, useEffect } from 'react';

import { copyToClipboard, generatePassword } from './utils';

import { Checkbox } from './Checkbox';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [hasSymbols, setHasSymbols] = useState(true);
  const [hasNumbers, setHasNumbers] = useState(true);
  const [hasLowercase, setHasLowercase] = useState(true);
  const [hasUppercase, setHasUppercase] = useState(true);
  const [copied, setCopied] = useState(false);

  function getPassword() {
    const password = generatePassword(
      length,
      hasSymbols,
      hasNumbers,
      hasLowercase,
      hasUppercase
    );

    setPassword(password);
  }

  useEffect(() => {
    const password = generatePassword(
      length,
      hasSymbols,
      hasNumbers,
      hasLowercase,
      hasUppercase
    );
    setPassword(password);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setCopied(false);
    }, 5000);

    return () => {
      clearTimeout(id);
    };
  }, [copied]);

  const disabled = !hasSymbols && !hasNumbers && !hasLowercase && !hasUppercase;

  return (
    <div className='flex items-center justify-center min-h-screen text-gray-900 bg-primary-100'>
      {copied && (
        <div className='absolute px-4 py-1 transition-all duration-200 rounded top-2 right-10 bg-primary-400 text-gray-50'>
          Copied to clipboard!
        </div>
      )}
      <main className='flex flex-col w-full max-w-lg px-4 space-y-8 lg:px-0'>
        <div className='flex items-center pl-3 pr-1 space-x-4 overflow-hidden text-lg border-2 rounded bg-gray-50 h-14 border-gray-50 focus-within:border-primary-300'>
          <input
            value={password}
            defaultValue={password}
            type='text'
            className='w-full px-0 border-none bg-gray-50 focus:outline-none focus:ring-0 selection:bg-primary-200 selection:text-primary-400'
          />
          <button
            className='p-1 transition-colors duration-200 rounded text-primary-300 hover:text-primary-400'
            onClick={() => {
              copyToClipboard(password);
              setCopied(true);
            }}
          >
            <svg
              className='w-8 h-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
              />
            </svg>
          </button>
        </div>

        <div className='flex flex-col space-y-4 font-bold'>
          <div className='flex items-center space-x-2'>
            <input
              value={length}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLength(Number(e.target.value))
              }
              type='range'
              min={0}
              max={52}
              className='w-2/3 slider'
            />

            <span className='flex items-center w-1/3 space-x-1'>
              <span>{length}</span> <span className='font-normal'>characters</span>
            </span>
          </div>

          <Checkbox
            id='symbols'
            label='Symbol'
            example='@#$%'
            checked={hasSymbols}
            onChange={() => setHasSymbols(!hasSymbols)}
          />

          <Checkbox
            id='numbers'
            label='Numbers'
            example='0-9'
            checked={hasNumbers}
            onChange={() => setHasNumbers(!hasNumbers)}
          />

          <Checkbox
            id='lowercase'
            label='Lowercase Characters'
            example='a-z'
            checked={hasLowercase}
            onChange={() => setHasLowercase(!hasLowercase)}
          />

          <Checkbox
            id='uppercase'
            label='Upercase Characters'
            example='A-Z'
            checked={hasUppercase}
            onChange={() => setHasUppercase(!hasUppercase)}
          />
        </div>

        <button
          className={`py-2 transition-colors duration-200 rounded text-gray-50 ${
            disabled
              ? 'bg-primary-200 cursor-not-allowed'
              : 'bg-primary-400 hover:bg-primary-300'
          }`}
          onClick={getPassword}
          disabled={disabled}
        >
          Generate Password
        </button>
      </main>
    </div>
  );
}

export default App;
