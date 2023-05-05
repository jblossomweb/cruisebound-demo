import React, { useState } from 'react'
import classNames from 'classnames'

import Button from 'app/components/atoms/Button'
import Image from 'app/components/atoms/Image'
import Arrow from 'app/components/atoms/Arrow'
import logo from 'svg/logo.svg'

import styles from './FoldingColumn.module.css'

export interface FoldingColumnProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
}

const FoldingColumn: React.FC<FoldingColumnProps> = ({
  leftContent,
  rightContent,
}) => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className={styles.page}>
      <div
        data-testid="left-col"
        className={classNames(styles.left, { [styles.expanded]: expanded })}
      >
        <div className={styles.content}>
          <div className={styles.stack}>
            <div className={styles.top}>
              <div className={styles.toggle}>
                <Button
                  text={<Arrow color="#fff" size={12} />}
                  color="slate"
                  onClick={() => {
                    setExpanded(!expanded)
                  }}
                />
              </div>
              <div className={styles.main}>{leftContent}</div>
            </div>
            <div className={styles.footer}>
              <Image src={logo} width={176} height={86} alt="Cruisebound" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.content}>{rightContent}</div>
      </div>
    </div>
  )
}

export default FoldingColumn
