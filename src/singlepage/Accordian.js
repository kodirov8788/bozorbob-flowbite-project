import React, { useState } from 'react'

function Accordian({text}) {
    const [open, setOpen] = useState(false)
    const AccordionFunc = () => {
      setOpen(!open)
    
    
    }
  return (
    <div id="accordion-collapse-heading-1" onClick={() => AccordionFunc()}>
    <button type="button" class="outline-non  flex items-center justify-between w-full pl-[10px] pr-[10px] pb-[10px] pt-[10px] font-medium rtl:text-right rounded-[50px] gap-3 hover:bg-slate-200" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>Add your personalization (optional)</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
      </svg>
    </button>
    <div id="accordion-collapse-body-1" className=' rounded-b-xl' style={open ? { display: "block" } : { display: "none" }} class="hidden" aria-labelledby="accordion-collapse-heading-1">
      <div class="p-2 ">
        <p class="mb-2 ">{text}</p>
      </div>
    </div>
  </div>
  )
}

export default Accordian