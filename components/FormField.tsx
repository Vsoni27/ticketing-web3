'use client';
import React from 'react'

const FormField = (props: { labelName: string, placeholder: string, inputType: string, isTextArea: boolean, value: string, handleChange: ()=>void }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {props.labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">{props.labelName}</span>
      )}
      {props.isTextArea ? (
        <textarea
          required
          value={props.value}
          onChange={props.handleChange}
          rows={10}
          placeholder={props.placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input
          required
          value={props.value}
          onChange={props.handleChange}
          type={props.inputType}
          step="0.1"
          placeholder={props.placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  )
}

export default FormField