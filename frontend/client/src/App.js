import './App.css';
import NavBar from './components/NavBar';
import BooksList from './components/BooksList';
import MyList from './components/MyList';

import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

function App() {
  const { loading, data } = useQuery(GET_BOOKS);

  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [addedBooks, setAddedBooks] = useState([]);
  const [showMyList, setShowMyList] = useState(false);

  useEffect(() => {
    if(data){
        setFilteredBooks(data.books)
    }
  }, [data]);

  return (
    <>
      <NavBar setSearch={setSearch} setShowMyList={setShowMyList} showMyList={showMyList}/>
      {
        showMyList ? (<MyList books={addedBooks} setAddedBooks={setAddedBooks}/>) :(<BooksList loading={loading}  filteredBooks={filteredBooks} search={search} setAddedBooks={setAddedBooks} />)
      }
    </>
);
}

export default App;
