import { useState } from 'react';
import styles from '@/components/SearchBar/SearchBar.module.css';

export default function SearchBar({ onSearch, onClear, loading, placeholder }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSubmit(e);
  }

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    if (value === "") {
      onClear?.();
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.inputGroup}>
          <span className={styles.icon}>🔍</span>
          <input
            className={styles.input}
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder || 'Buscar por título, autor ou assunto...'}
            disabled={loading}
          />
        </div>
        <button
          className={styles.btn}
          onClick={handleSubmit}
          disabled={loading || !query.trim()}
        >
          {loading ? 'Buscando...' : 'Buscar ✦'}
        </button>
      </div>

      <br />

      <h3 className={styles.title2}>Acervo</h3>
    </>
  );
}