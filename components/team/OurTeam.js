import styles from './ourteam.module.css'

function OurTeam() {
    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <div className={styles.cardcontent}>
                <h2 className={styles.cardtitle}>something awesome</h2>
                <p class="card-body">Our mission is to ensure teams can do their best work, no matter their size or budget.</p>
                <a href="#" class="button">Learn More</a>
                </div>
            </div>

        </div>
    )

}

export default OurTeam