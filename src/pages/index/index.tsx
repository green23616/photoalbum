import CommonHeader from "../../components/common/header/CommonHeader"
import CommonNavigation from "../../components/common/navigation/CommonNavigation"
import CommonSearchBar from "../../components/common/searchBar/CommonSearchBar"
import styles from "./styles/index.module.scss"

function Index() {

  return (
    <div className={styles.index}>
      {/* HEADER UI */}
    <CommonHeader/>
    {/* NAV UI */}
      <CommonNavigation/>
      <div className={styles.index__contents}>
        <div className={styles.index__contents__intro}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>시각 자료 출처입니다 <br/> 모든 지역에 있는 크리에이터들의 지원을 받습니다.</span>
            {/* SEARCH UI */}
            <CommonSearchBar/>
          </div>
        </div>
        <div className={styles.index__contents__imageBox}></div>
      </div>
      {/* FOOTER UI */}
    </div>
  )
}

export default Index