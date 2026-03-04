import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

const InputField = ({ name, label, placeholder, type = "text", register, error, validation, disabled, value }: FormInputProps) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor={name} className='form-label'>
        {label}
      </Label>
      <Input type={type} id={name} placeholder={placeholder} {...register(name, validation)} disabled={disabled} value={value} className={cn('form-input', { 'opacity-50 curson-not-allowed': disabled })}
        {...register(name, validation)} />
      {error && <p className='error-text'>{error.message}</p>}
    </div>
  )
}

export default InputField