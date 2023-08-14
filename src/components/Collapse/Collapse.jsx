import { useState } from "react";
import "./collapse.scss"

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    console.log(isOpen);

    return (
        <div className="drop-button" onClick={() => handleOpen()}> {title}
            <p className={`${isOpen ? 'arrow-open' : 'arrow-closed'}`}>&lt;</p>
                <div className="collapse-content">
                    {Array.isArray(content) ? (
                      <ul className="collapse__list">
                        {content.map((equipment, index) => (
                          <li key={index} className="collapse__list-element">
                            {equipment}
                          </li>
                        ))}
                      </ul>
                    ) : (
                    <p className={`${isOpen ? 'collapse-text-open' : 'collapse-text-closed'}`}>{content}</p>
                  )}
                </div>
        </div>
    )

}

export default Collapse;