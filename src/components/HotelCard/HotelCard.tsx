import { HotelCopy } from "../../copy/hotelsCopy";
import { GuestsRow } from '../GuestsRow/GuestsRow';
import { BookButton } from '../BookButton/BookButton';
import { HotelDescription } from '../HotelDescription/HotelDescription';
import { RenderStars } from "../Stars/RenderStars";
import styles from './HotelCard.module.css'

export const HotelCard = (props: { hotel: HotelCopy }) => {
    const { hotel } = props
    return <div className={styles.card}>
        <div className={styles.cardBody}>
            <div className={styles.hotelImageWrapper} >
                <img src={hotel.image.default} alt={hotel.title} className={styles.hotelImage} />
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.title}>{hotel.title}</div>
                <div className={styles.subTitle}>{hotel.location}</div>
                <div className={styles.stars}><RenderStars stars={hotel.stars} /></div>
                <GuestsRow guests={hotel.guests} />
                <div className={styles.infoRow}><b>{hotel.date}</b> for <b>{hotel.days} days</b></div>
                <div className={styles.infoRow}>Departing from <b>{hotel.departingFrom}</b></div>
                <BookButton priceInPence={hotel.priceInPence} />
            </div>
        </div>
        <HotelDescription description={hotel.description} />
    </div >
}