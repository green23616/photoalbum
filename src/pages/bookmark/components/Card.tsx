import { CardDTO } from "../../index/types/card"
import styles from "./Card.module.scss"

interface Props{
  item: CardDTO
}

function Card( { item } :Props) {

  return (
    <div className={styles.card}>
      <div className={styles.card__imgBox}>
        <img src={item.urls.small} className={styles.card__imgBox__img} />
      </div>
      <div className={styles.card__infoBox}>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>작성자</span>
          <span className={styles.value}>{item.user.name}</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>이미지 크기</span>
          <span className={styles.value}>{item.width} X {item.height}</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>업로드 날짜</span>
          <span className={styles.value}>{item.created_at.split('T')[0]}</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>마지막 업데이트</span>
          <span className={styles.value}>{item.updated_at.split("T")[0]}</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>다운로드 수</span>
          <span className={styles.value}>{item.likes}</span>
        </div>
      </div>
    </div>
  )
}

export default Card