'use client'

export default function Button({onClickButton, className, children}) {
  return (
    <button className={className} onClick={onClickButton}>
        {children}
    </button>
  )
}
