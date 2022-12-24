import styles from "../styles/ShowContent.module.css";
import { BsPerson } from "react-icons/bs";
import { GetServerSideProps, NextPage } from "next";

interface Props {
    results : {
        activity: string,
        type: string,
        participants: number,
        price: number,
        link: string,
        key: string,
        accessibility: number
    }
}

const ShowContent = ({results}  : Props) : JSX.Element => {
    return (
        <div className={styles.mainContainer}>
            <main className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Activity</h2>
                    <p className={styles.description}>{results.activity}</p>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>Tags</h2>
                    <button className={styles.button}>{results.type}</button>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>Participants</h2>
                    <div className={styles.participants}>
                        <BsPerson className={styles.icon} />
                        <p className={styles.description}>{(results.participants > 1) ? `${results.participants} people` : `${results.participants} person`}</p>
                    </div>
                </div>
                <h4 className={styles.author}>Made by: <b className={styles.authorName}>unknown</b></h4>
            </main>
        </div>
    )
}

export default ShowContent;