import React from 'react';
import { BsFillArrowUpCircleFill } from "react-icons/bs";


export default function PageUp() {
  return (
    <div className="scroll-up">
      <h3>Scroll Up</h3>
      <button type="button" onClick={() => window.scrollTo(0, 0)}><BsFillArrowUpCircleFill /></button>
    </div>
  )
}
