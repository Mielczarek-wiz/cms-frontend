import React from 'react'
import Infobox from '../infoboxes/Infobox'
import { infoboxHeaderMock } from './mock'
import Button from '../buttons/Button'

export default function KebabIcon() {
  return (
    <div id="container">
      <div id="menu-wrap">
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
              <Button className="bg-blue-500 rounded" onClickButton={console.log("hej")} >
                <span></span>
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
