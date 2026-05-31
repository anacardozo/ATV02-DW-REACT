
import { useEffect } from 'react';
import Image from 'next/image';
import styles from '@/components/BookCardOne/BooKModal.module.css';

export default function BookModal({ book, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!book) return null;

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : null;

  const title = book.title || 'Título indisponível';
  const author = book.author_name?.[0] || 'Autor desconhecido';
  const year = book.first_publish_year;
  const subjects = book.subject?.slice(0, 5) || [];

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <div className={styles.inner}>
          <div className={styles.coverSide}>
            {coverUrl ? (
              <div style={{ position: 'relative', width: 180, height: 260 }}>
                <Image
                  src={coverUrl}
                  alt={`Capa de ${title}`}
                  fill
                  style={{ objectFit: 'cover', borderRadius: 12 }}
                />
              </div>
            ) : (
              <div className={styles.coverPlaceholder}>📖</div>
            )}
          </div>

          <div className={styles.infoSide}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.author}>por {author}</p>
            {year && <p className={styles.year}>Publicado em {year}</p>}

            {subjects.length > 0 && (
              <div className={styles.subjects}>
                {subjects.map((s, i) => (
                  <span key={i} className={styles.subject}>{s}</span>
                ))}
              </div>
            )}
            
            <a href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openBtn}
            >
                Ver na Open Library ↗
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}