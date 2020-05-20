import React from 'react'
import Style from '../styles/social-media-quilt.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default ({ styles, colour }) => {
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <a
          className={Style.a}
          href="https://www.instagram.com"
          style={{ color: colour }}
        >
          <FontAwesomeIcon className={Style.icon} icon={['fab', 'instagram']} />
        </a>
      </li>
      <li className={styles.li}>
        <a
          className={Style.a}
          href="https://www.facebook.com"
          style={{ color: colour }}
        >
          <FontAwesomeIcon
            className={Style.icon}
            icon={['fab', 'facebook-f']}
          />
        </a>
      </li>
      <li className={styles.li}>
        <a
          className={Style.a}
          href="https://www.pinterest.com"
          style={{ color: colour }}
        >
          <FontAwesomeIcon
            className={Style.icon}
            icon={['fab', 'pinterest-p']}
          />
        </a>
      </li>
    </ul>
  )
}
