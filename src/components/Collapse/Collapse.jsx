import { useState } from "react";
import "./collapse.scss"
import arrow from './../../assets/arrow.png'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const [firstVisit, setFirstVisit] = useState(true)

    const handleOpen = () => {
      setFirstVisit(false)
        setIsOpen(!isOpen);
    }
    console.log(isOpen);

    return (
        <div className="drop-button" onClick={() => handleOpen()}> 
          <div className="drop-button-header">
            {title}
                <img src={arrow} className={`${isOpen ? 'arrow-open' : 'arrow-closed'}`}/>
          </div>
                <div className={`collapse-content ${!isOpen ? '' : 'content-slidein'}`}>
                {Array.isArray(content) ? (
                      <div className={`collapse-list ${firstVisit ? 'first-visit' : ''}`}>
                        <ul className={
                          `collapse-list-open ${firstVisit ? 'first-visit' : ''}`
                          }>
                          {content.map((equipment) => (
                            <li key={equipment} className="collapse-list-element">
                              {equipment}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                    <p className={`collapse-text ${firstVisit ? 'first-visit' : ''}`}>{content}
                    </p>
                  )}
                </div>
        </div>
    )

}

export default Collapse;