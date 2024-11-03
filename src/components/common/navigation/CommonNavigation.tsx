import { useState } from "react"
import styles from "./CommonNavigation.module.scss"
import { Link } from "react-router-dom"
import navJson from "./nav.json"

interface Navigation{
  index: number,
  path: string,
  label: string,
  searchValue: string,
  isActive: boolean,
}

function CommonNavigation() {

  const [navigation] = useState<Navigation[]>(navJson)

  const navLinks = navigation.map((item :Navigation) => {
    return(
      <Link to={item.path} className={styles.navigation__menu} key={item.path}>
        <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
    )
  })

  return (
    <div className={styles.navigation}>
      {navLinks}
    </div>
  )
}

export default CommonNavigation