import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

import Button from '../../components/Button'
import Alert from '../../components/Alert'
import { Suggestion, SuggestionWrapper } from './style'

const Search = () => {
  const [onFocus, setOnFocus] = useState(false)
  return (
    <div className='flex flex-col justify-center relative mx-auto w-3/4'>
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
      <Button
        className={onFocus ? 'w-28 mx-auto mt-32' : 'w-28 mx-auto'}
        type='red'
        title='Search'
      />
      <Alert
        className='mt-24'
        title='HOW TO FIND THE SERIAL NUMBER?'
        body='Turn the device over and find the QR code which has the serial number. Enter the serial number above.'
      />
    </div>
  )
}

export default Search
