import { useEffect, useState } from "react"
// Page
import CommonHeader from "../../components/common/header/CommonHeader"
import Card from "./components/card"
// Css
import styles from "./styles/index.module.scss"
import { CardDTO } from "../index/types/card"

function index() {

  const [data, setData] = useState([])
  const getData = () => {
    const getLocalStorage = JSON.parse(localStorage.getItem("bookmark"))
    
    if (getLocalStorage || getLocalStorage !== null) setData(getLocalStorage)
    else setData([])
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.page}>
      {/* Header UI */}
      <CommonHeader/>
      <main className={styles.page__contents}>
        {
          data.length === 0
          ? <div className={styles.page__contents__noData}>조회 가능한 데이터가 없습니다</div>
          : data.map((item :CardDTO) => {
            return(
              <Card item={item} key={item.id}/>
            )
          })
        }
      </main>
    </div>
  )
}

export default index