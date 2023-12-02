import React from 'react'
import Infobox from '../infoboxes/Infobox'
import { infoboxHeaderMock } from './mock'
import Button from '../buttons/Button'

export default function KebabIcon() {
  return (
    <div id="container" className='flex flex-row items-center justify-center p-2 m-0 bg-white w-fit h-fit'>
      <div id="menu-wrap" className='relative w-5 h-5'>
        <input type="checkbox" className="toggler" />
        <div className="dots">
          <div></div>
        </div>
        <div className="menu">
          <div className='flex flex-col items-start justify-start w-full h-full '>
            <ul className='list-none'>
              {infoboxHeaderMock.map((props) => 
              
                (<li className='m-3' key={props.id}><Infobox id={props.id} iconRef={props.imgRef} information={props.information} subInformation={props.subInformation} isVisible={props.isVisible} width={props.width} height={props.height}/></li>)
              )}
            </ul>
            <Button className="w-full h-10 text-sm text-black bg-transparent border border-gray-700 rounded hover:bg-blue-600 hover:border-none hover:text-white" onClickButton={console.log("hej")} >
              REQUEST A CALL
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
