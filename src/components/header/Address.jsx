import Infobox from "../infoboxes/Infobox";
import { infoboxHeaderMock } from "./mock";

export default function Address({className = ""}) {
  return (
    <ul className={className}>
      {infoboxHeaderMock.map((props) => (
        <li className="p-2" key={props.id}>
          <Infobox
            id={props.id}
            iconRef={props.imgRef}
            information={props.information}
            subInformation={props.subInformation}
            isVisible={props.isVisible}
            width={props.width}
            height={props.height}
          />
        </li>
      ))}
    </ul>
  );
}
