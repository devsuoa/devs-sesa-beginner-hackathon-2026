import Button from "../../components/button/Button";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className="page">
      <section className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>
            <span className={styles.accent}>DEVS x SESA</span>
            <br />
            Beginner
            <br />
            Hackathon 2026
          </h1>
          <p className={styles.subtitle}>
            Get ready to build something awesome with your team.
          </p>
          <Button text="API Example" to="/api-example" />
        </div>
        <div className={styles.bannerImage}>
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="logo" />
        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.card}>
          <h3>🎉 Have Fun</h3>
          <p>This is all about enjoying the experience and making memories with your team.</p>
        </div>
        <div className={styles.card}>
          <h3>📚 Learn Stuff</h3>
          <p>Pick up new skills in React, CSS, and web development along the way.</p>
        </div>
        <div className={styles.card}>
          <h3>🤝 Build Together</h3>
          <p>Collaborate with your teammates and bring your ideas to life.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
