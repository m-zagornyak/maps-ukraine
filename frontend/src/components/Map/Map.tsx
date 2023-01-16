import { Region } from './Region'
import { FC, useEffect } from 'react'
import { COLOR_ALARM, COLOR_DEFAULT } from '../../utils/constants/constants'
import { regions } from '../../data/region'
import { IRegion } from '../../types/IRegion'

import styles from './Map.module.scss'

export const Map: FC = () => {
    const loadRegions = () => {
        const regions: IRegion[] = []
    };

    return (
        <div className={styles.map}>
            <svg viewBox="0 0 1000 670" fill={COLOR_DEFAULT} xmlns="http://www.w3.org/2000/svg">
                <g id="map">
                    {regions?.map((region, idx) => {

                        return (
                            <Region key={idx} region={region}/>
                        )
                    })}
                </g>
            </svg>
        </div>
    )
}