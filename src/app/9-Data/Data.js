import React from 'react';
import LeadApp from '../1-LeadApp/LeadApp';
import data from '../excel.json'
import styles from './data.module.css'

const Data = () => {
    return (
        <LeadApp>
            <h1>This is your data</h1>
            {data.map(item => {
                return(
                    <div className={styles.data}>
                        <li className={styles.item1}>{item.Search}</li>
                        <li className={styles.item2}>{item.Search_1}</li>
                        <li className={styles.item3}>{item.Search_3}</li>
                        <li className={styles.item4}>{item.__EMPTY}</li>
                    </div>
                )
            })}
        </LeadApp>
    );
};

export default Data;