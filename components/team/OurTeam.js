import styles from './ourteam.module.css'

function OurTeam() {
    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <div className={styles.cardcontent}>
                <h2 className={styles.cardtitle}>Annie Stanley</h2>
                <p className={styles.cardbody}>Product Manager</p>
                <p className={styles.cardbody1}>Former PM for Airtable, Medium, Ghost, and Lumi.</p>
                <div className={styles.icons}>
                <img className={styles.twitter} href="#" src="twitter.svg" alt="Twitter logo" width="25" height="25"></img>
                <img className={styles.linkedin} href="#" src="linkedin.svg" alt="linkedin logo" width="25" height="25"></img>
                </div>
                </div>
            </div>

        </div>
    )

}

export default OurTeam