import styles from  "../styles/HomeDisplay.module.css";

const HomeDisplay : React.FC = () : JSX.Element => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cure your <br /> boredom today</h1>
            <p className={styles.description}>Having nothing to do, well we always having something for you. View an activity generated for    you. <b className={styles.bold}>Not happy?</b> No problem, generate a new one .</p>
            <button 
                className={styles.button}
                onClick={() => location.reload()}
            >New activity</button>
        </div>
    )
}

export default HomeDisplay;