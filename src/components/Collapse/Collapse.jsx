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
                <div className={`collapse-content ${!isOpen ? '' : 'content-slidein'} ${isOpen ? '' : 'slideout'}`}>
                    {Array.isArray(content) ? (
                      <div className={`collapselist ${firstVisit ? 'first-visit' : ''}`}>
                        <ul className={`collapse-list-closed ${firstVisit ? 'first-visit' : ''} ${isOpen ? 'collapse-list-open' : 'slideout'} ${!isOpen ? '' : 'slidein'}`}>
                          {content.map((equipment) => (
                            <li key={equipment.id} className="collapse-list">
                              {equipment}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                    <p className={`collapse-text-closed ${firstVisit ? 'first-visit' : ''} ${isOpen ? 'collapse-text-open' : 'slideout'} ${!isOpen ? '' : 'slidein'}`}>{content}</p>
                  )}
                </div>
        </div>
    )

}

export default Collapse;