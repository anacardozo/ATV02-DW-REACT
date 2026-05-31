import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '@/components/Principal/Principal.module.css';

export default function BookList({ bookSearchTerm = "", onSelect }) {
  const [booksData, setBooksData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const query = bookSearchTerm.trim() !== "" ? bookSearchTerm.trim() : "classic";
        
        const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=16`);
        
        if (response.data.docs) {
          setBooksData(response.data.docs);
        }
      } catch (error) {
        console.log("Erro ao buscar dados dos livros na API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [bookSearchTerm]); 

  if (loading) {
    return (
      <div className={styles.gridContainer || ""}>
        {Array.from({ length: 16 }).map((_, index) => (
          <BookCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!booksData || booksData.length === 0) {
    return <p style={{ textAlign: 'center', padding: '2rem' }}>Nenhum livro encontrado.</p>;
  }

  return (
    <div className={styles.gridContainer || ""}>
      {booksData.map((book) => {
        const title = book.title || "Título indisponível";
        const author = book.author_name?.[0] || "Autor desconhecido";
        const mainSubject = book.subject?.[0] || "Geral";
        const year = book.first_publish_year;

        const description = year
          ? `Publicado em ${year}. ${mainSubject} · Literatura`
          : `${mainSubject} · Literatura`;

        const coverUrl = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : null;

        return (
          <article className={styles.card} key={book.key || book.cover_i}>
            <span className={styles.sparkle}>✦</span>

            <div className={styles.coverWrapper}>
              {coverUrl ? (
                <img 
                  className={styles.cover} 
                  src={coverUrl} 
                  alt={`Capa de ${title}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              ) : (
                <div className={styles.coverPlaceholder}>
                  <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📖</span>
                  <span className={styles.placeholderTitle}>{title}</span>
                </div>
              )}
            </div>

            <div className={styles.body}>
              <h3 className={styles.bookTitle}>{title}</h3>
              <p className={styles.author}>por {author}</p>
              <p className={styles.desc}>{description}</p>
              <button 
                className={styles.btn}
                onClick={() => onSelect?.(book)}
               >
                    Ler mais ✦
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function BookCardSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={`${styles.skeletonCover} skeleton`} />
      <div className={styles.skeletonBody}>
        <div className={`${styles.skeletonLine} skeleton`} style={{ width: '80%' }} />
        <div className={`${styles.skeletonLine} skeleton`} style={{ width: '55%' }} />
        <div className={`${styles.skeletonLine} skeleton`} style={{ width: '100%' }} />
        <div className={`${styles.skeletonLine} skeleton`} style={{ width: '100%' }} />
        <div className={`${styles.skeletonLine} skeleton`} style={{ width: '40%' }} />
      </div>
    </div>
  );
}