import { useState } from "react"
import { useRecoilValue } from "recoil"
// Pages
import { imageData } from "../../store/selectors/imageSelector"
import CommonFooter from "../../components/common/footer/CommonFooter"
import CommonHeader from "../../components/common/header/CommonHeader"
import CommonNavigation from "../../components/common/navigation/CommonNavigation"
import CommonSearchBar from "../../components/common/searchBar/CommonSearchBar"
import Card from "./components/Card"
import DetailDialog from "../../components/common/dialog/DetailDialog"
// CSS
import styles from "./styles/index.module.scss"
// Type
import { CardDTO } from "./types/card"

function Index() {

  const storeImage = useRecoilValue(imageData)
  const [imgData, setImgData] = useState<CardDTO>()
  const [open, setOpen] = useState(false) //이미지 상세 다이얼로그 발생 State

  const CARD_LIST = storeImage?.data.results.map((card:CardDTO) => {
    return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData}/>
  })
  
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
        <div className={styles.index__contents__imageBox}>{CARD_LIST}</div>
      </div>
      {/* FOOTER UI */}
      {
        open && <DetailDialog data={imgData} handleDialog={setOpen} />
      }
      <CommonFooter/>
    </div>
  )
}

export default Index