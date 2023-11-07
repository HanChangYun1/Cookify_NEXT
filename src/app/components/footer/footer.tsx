import styles from './css/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.left}>
        <span >Cookify Recipe Hub</span>
        <div>
        </div>
      </section>
      <section className={styles.right}>
        <div className={styles.help_center}>
          <h3>Help Center</h3>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>Cooking Tips</p>
          <p>Get in Touch</p>
        </div>
        <div className={styles.about_us}>
          <h3>About Us</h3>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
          <p>Subscription plans</p>
        </div>
      </section>
    </footer>
  )
}