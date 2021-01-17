import styles from '../styles/About.module.css';
import ContactForm from '../components/ContactForm';

function About() {
  return (
    <div>
      <h2>About</h2>

      <p> A blog where you can find:</p>
      <ul className={styles.aboutlist}>
        <li>✅ economic insights</li>
        <li>🔖 tutorials</li>
        <li>🐾 walkthroughs</li>
        <li>🆒 how and why it works</li>
        <li>🤿 things about ordinary life on earth</li>
        <li>🍿 expose the obvious but not so obvious</li>
        <li></li>
      </ul>

      <ContactForm />
    </div>
  );
}
export default About;
