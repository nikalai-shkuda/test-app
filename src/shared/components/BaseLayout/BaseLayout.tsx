import { Outlet } from "react-router";
import { Navigation } from "../../components";
import styles from "./BaseLayout.module.css";

export function BaseLayout() {
  return (
    <section className={styles.layout}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </section>
  );
}
