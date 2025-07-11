import styles from "./index.module.scss";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.name}>Full Stack Developer</div>
        <div className={styles.description}>
          I build robust, scalable web applications and digital solutions that
          blend seamless functionality with engaging user experiences from front
          to back.
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.viewMyWorkButton}>View My Work</div>
          <div className={styles.downloadCvButton}>Download CV</div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageBackground}></div>
        <div className={styles.image}>
          <img src="/images/home/me2.png" alt="me" width={200} />
        </div>
      </div>
    </div>
  );
}
