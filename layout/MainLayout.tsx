import NavBar from "../components/Navbar";
import styles from "../styles/MainLayout.module.css"

const MainLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.containerProps}>{children}</div>
        </div>
    )
}

export default MainLayout;