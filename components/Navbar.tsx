import { BiShareAlt } from "react-icons/bi";
import styles from "../styles/Navbar.module.css"

const NavBar : React.FC = () : JSX.Element => {

    const share = () : void => {
        navigator.share({
            text: "Are you bored and have nothing to do, try these activities",
            url: "https://salesmall-survey.netlify.app/"
        }).then(() => {
            console.log("Link shared")
        }).catch((error) => alert("Sorry, could not share"))
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>I am bored.</h1>
            <div className={styles.shareContainer} onClick={() => share()}>
                <BiShareAlt className={styles.shareIcon} />
                <h4>share</h4>
            </div>
        </div>
    )
}

export default NavBar;