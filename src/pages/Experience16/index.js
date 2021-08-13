import React from 'react'
import { useForm } from 'react-hook-form'

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty }
  } = useForm()
  const onSubmit = (data) => console.log(data)
  const watchFirstName = watch('firstName')

  return (
    <>
      <button onClick={() => console.log(watchFirstName)}>
        Console log of the value of FirstName
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>firstName : </label>
          <input
            {...register('firstName', { required: true, minLength: 20 })}
          />
          {errors.firstName?.type === 'required' && <span>Required</span>}
          {errors.firstName?.type === 'minLength' && (
            <span>Not Long enough</span>
          )}
        </div>
        <div>
          <label>lastName : </label>
          <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
          {errors.lastName && <span>Wrong pattern</span>}
        </div>

        <div>
          <label>category : </label>
          <select {...register('category')}>
            <option value="">Select...</option>
            <option value="A">Category A</option>
            <option value="B">Category B</option>
          </select>
        </div>

        <input type="submit" disabled={!isDirty} />
      </form>
    </>
  )
}
