import { useEffect, useState } from "react"
import styles from "./CommonNavigation.module.scss"
import { Link, useLocation } from "react-router-dom"
import navJson from "./nav.json"
import { useRecoilState } from "recoil"
import { pageState } from "../../../store/atoms/pageState"
import { searchState } from "../../../store/atoms/searchState"

interface Navigation{
  index: number,
  path: string,
  label: string,
  searchValue: string,
  isActive: boolean,
}

function CommonNavigation() {

  const location = useLocation()
  const [navigation, setNavigation] = useState<Navigation[]>(navJson)
  const [page, setPage] = useRecoilState(pageState)
  const [search, setSearch] = useRecoilState(searchState)

  useEffect(() => {
    navigation.forEach((nav :Navigation) => {
      nav.isActive = false
      
      if (nav.path === location.pathname || location.pathname.includes(nav.path)) {
        nav.isActive = true
        setSearch(nav.searchValue)
        setPage(1)
      }
    })
    setNavigation([...navigation])
  }, [location.pathname])
  
  const navLinks = navigation.map((nav :Navigation) => {
    return(
      <Link to={nav.path} 
      className={
        nav.isActive 
        ? `${styles.navigation__menu} ${styles.active}` 
        : `${styles.navigation__menu} ${styles.inactive}`
      }
        key={nav.path}>
        <span className={styles.navigation__menu__label}>{nav.label}</span>
      </Link>
    )
  })
  
  return (
    <nav className={styles.navigation}>{navLinks}</nav>
  )
}

export default CommonNavigation