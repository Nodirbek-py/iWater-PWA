import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Link, useLocation } from 'react-router-dom'

import Button from '../../components/Button'
import Alert from '../../components/Alert'
import { Suggestion, SuggestionWrapper } from './style'

const Search = () => {
  const [onFocus, setOnFocus] = useState(false)
  const { pathname } = useLocation()
  return (
    <div className='flex flex-col justify-center relative mx-auto w-5/6'>
      <TextField
        id='filled-basic'
        label='Serial Number'
        placeholder='Enter a Serial Number'
        variant='filled'
        className='!mb-14'
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
      {onFocus && (
        <SuggestionWrapper className='shadow-lg shadow-gray-400'>
          <Suggestion>Hey</Suggestion>
          <Suggestion>Jey</Suggestion>
          <Suggestion>Tey</Suggestion>
          <Suggestion>Ley</Suggestion>
          <Suggestion>Hey</Suggestion>
          <Suggestion>Jey</Suggestion>
          <Suggestion>Tey</Suggestion>
          <Suggestion>Ley</Suggestion>
          <Suggestion>Hey</Suggestion>
          <Suggestion>Jey</Suggestion>
          <Suggestion>Tey</Suggestion>
          <Suggestion>Ley</Suggestion>
          <Suggestion>Hey</Suggestion>
          <Suggestion>Jey</Suggestion>
          <Suggestion>Tey</Suggestion>
          <Suggestion>Ley</Suggestion>
        </SuggestionWrapper>
      )}
      <Link
        to={pathname !== '/install' || pathname !== '/install/' ? '/report/24' : '/install/24'}
        className='mx-auto'
      >
        <Button
          className={onFocus ? 'w-28 mx-auto mt-32' : 'w-28 mx-auto'}
          type='red'
          title='Search'
        />
      </Link>
      <Alert
        className='mt-24'
        title='HOW TO FIND THE SERIAL NUMBER?'
        body='Turn the device over and find the QR code which has the serial number. Enter the serial number above.'
      />
    </div>
  )
}

export default Search
