import React from "react"
import Style from "../styles/social-media-quilt.module.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

export default props => {
  return (
    <ul className={Style.ul}>
      <li>
        <a href="https://www.facebook.com" style={{ color: props.colour }}>
          <FontAwesomeIcon className="fa-2x" icon={["fab", "facebook-f"]} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com" style={{ color: props.colour }}>
          <FontAwesomeIcon className="fa-2x" icon={["fab", "instagram"]} />
        </a>
      </li>
      <li>
        <a href="https://www.pinterest.com" style={{ color: props.colour }}>
          <FontAwesomeIcon className="fa-2x" icon={["fab", "pinterest-p"]} />
        </a>
      </li>
    </ul>
  )
}