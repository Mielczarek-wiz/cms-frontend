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
          <div>
            <ul>
              {infoboxHeaderMock.map((props) => 
              
                (<li key={props.id}><Infobox id={props.id} iconRef={props.imgRef} information={props.information} subInformation={props.subInformation} isVisible={props.isVisible} width={props.width} height={props.height}/></li>)
              )}
              <Button className="h-10 bg-blue-500 rounded w-28" onClickButton={console.log("hej")} >
                <span className='text-sm '>REQUEST A CALL</span>
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
