import { useNavigate } from "react-router-dom"
import styles from "./CommonHeader.module.scss"

function CommonHeader() {
  
  const navigate = useNavigate()

  // 북마크 Page로 이동
  const moveToPage = (filter :string) => {
    if(filter == ""){
      navigate('/')
    }
    navigate(`/${filter}`)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox} onClick={() => {moveToPage('')}}>
        <img src="src/assets/images/image-logo.png" alt="logo" className={styles.header__logoBox__logo} />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>사진제출</button>
        <button className={styles.header__profileBox__button} onClick={() => moveToPage("bookmark")}>북마크</button>
        <span className={styles.header__profileBox__userName}>JWK | green23616@gmail.com</span>
      </div>
    </header>
  )
}

export default CommonHeader