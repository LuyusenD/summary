import React, { useState } from 'react'

function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    reValue: () => setValue(''),
    onChange: e => setValue(e.target.value)
  }
}

export default ({onSubmit}) => {

  const {reValue, ...text} = useInputValue('')
  const onSubmitHandler = (e) => {
    e.preventDefault()
    onSubmit(text.value);
    reValue()
  }

  return (
    <div>
      <form onSubmit = { onSubmitHandler }>
        <input type="text" {...text} />
      </form>
    </div>
  )
}