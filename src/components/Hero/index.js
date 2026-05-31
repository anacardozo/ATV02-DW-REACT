import styles from '@/components/Hero/Hero.module.css';

export default function Hero({ onExplore }) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.eyebrow}>✦ Biblioteca da Ana ✦</div>

        <h1 className={styles.title}>
          O Universo dos {' '}
          <span className="gradient-text-gold">Livros</span>
          <br />
          em uma estante{' '}
          <span className="gradient-text-lilac">infinita</span>
        </h1>

        <p className={styles.subtitle}>
          Uma vitrine de obras clássicas e contemporâneas — servida com o glamour de uma biblioteca antiga
        </p>

        <div className={styles.icons}>
          <span>📖</span>
          <span className={styles.iconStar}>✦</span>
          <span>🕯️</span>
        </div>
      </div>
    </section>
  );
}
