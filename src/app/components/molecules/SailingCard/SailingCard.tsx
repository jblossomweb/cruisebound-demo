import React from 'react'

import type Sailing from 'app/types/Sailing'
import Button from 'app/components/atoms/Button'
import Image from 'app/components/atoms/Image'
import displayDateRange from 'app/utils/displayDateRange'
import arrow from 'svg/arrow.svg'
import star from 'svg/star.svg'

import styles from './SailingCard.module.css'

export interface SailingCardProps {
  sailing: Sailing
}

const SailingCard: React.FC<SailingCardProps> = ({ sailing }) => (
  <div className={styles.card}>
    <div className={styles['card-left']}>
      <div className={styles['ship-container']}>
        <div className={styles['ship-image']}>
          <Image
            src={sailing.ship.image}
            alt={sailing.ship.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.dates}>
          {displayDateRange(sailing.departureDate, sailing.returnDate)}
        </div>
      </div>
    </div>
    <div className={styles['card-right']}>
      <div className={styles.main}>
        <div className={styles.top}>
          <h1 className={styles.title}>{sailing.name}</h1>
          <div className={styles['line-container']}>
            <div className={styles['line-logo']}>
              <Image
                src={sailing.ship.line.logo}
                alt={sailing.ship.line.name}
                layout="fill"
                objectFit="contain"
                objectPosition="right"
              />
            </div>
            <div className={styles['ship-name']}>{sailing.ship.name}</div>
          </div>
        </div>
        <div className={styles.specs}>
          <div className={styles.region}>{sailing.region}</div>
          <div className={styles.duration}>{sailing.duration} nights</div>
          <div className={styles.rating}>
            <Image src={star} alt="rating" width={12} height={12} />
            <span>{sailing.ship.rating}</span>
          </div>
          <div className={styles.reviews}>{sailing.ship.reviews} reviews</div>
        </div>
        <div className={styles.itinerary}>
          {sailing.itinerary.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`${item}${i}`}>
              <span>{item.split(',')[0]}</span>
              {i + 1 < sailing.itinerary.length && (
                <span>
                  <Image src={arrow} alt="to" />
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles['price-container']}>
          <div className={styles.interior}>Interior from</div>
          <div className={styles.price}>
            <sup>$</sup>
            {Math.ceil(sailing.price).toLocaleString()}
          </div>
        </div>
        <div className={styles.cta}>
          <Button text="See sailings" />
        </div>
      </div>
    </div>
  </div>
)

export default SailingCard
