import Head from "next/head";
import { useState } from "react";
import Container from "@/components/container";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import BookList from "@/components/Principal";
import BookModal from "@/components/BookCardOne/BookModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBook, setSelectedBook] = useState(null)

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <>
      <Head>
        <title>The Kuromi's Book &copy; 2026</title>
        <meta
          name="description"
          content="Consumo em React de uma API Pública de Livros"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Hero />
          <SearchBar
            onSearch={handleSearch}
            onClear={() => setSearchTerm("")}
            onSelect={(book) => setSelectedBook(book)}
          />
          <BookList 
            bookSearchTerm={searchTerm}
            onSelect={(book) => setSelectedBook(book)}
          />
        </Container>
      </main>

      <BookModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />
      <Footer />
    </>
  );
}
