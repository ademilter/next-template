import React from 'react'
import Link from 'next/link'
import { PAGES } from '../../constants'

import styles from './index.module.css'

function Nav() {
  return (
    <nav className={styles.nav}>
      {Object.keys(PAGES).map((key) => {
        const PAGE = PAGES[key]
        return (
          <Link href={PAGE.path} key={`link-${key}`}>
            <a>{PAGE.name}</a>
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
