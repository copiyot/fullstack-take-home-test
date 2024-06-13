import Button from '@mui/material/Button';
import { ImageList, Container} from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Delete from '@mui/icons-material/Delete';

function BooksList({loading, filteredBooks, search, setAddedBooks}) {

  return loading ? <Button variant="contained">LOADING......</Button> : (
    <Container>
        <ImageList gap={12} sx={{
            mb: 8,
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr)) !important'
        }}>
        {filteredBooks.filter(book => {
            return search.toLowerCase() === '' ? book :
            book.title.toLowerCase().includes(search)
        }).map((book, i) => (
            <ImageListItem key={i} sx={{
                height: '100% !important'
            }}>
            <img
                srcSet={require("../" + book.coverPhotoURL)}
                src={require("../" + book.coverPhotoURL)}
                alt={book.title}
                loading="lazy"
            />
            <ImageListItemBar
                title={book.title}
                subtitle={<span>by: {book.author}</span>}
                position="below"
                sx={{
                    background: 
                    'linear-gradient(to bottom, rgba(207,250,250,0.7)0%, rgba(207,250,250,0.3)70%, rgba(207,250,250,0)100%)',
                }}
                actionIcon={
                    <div style={{width: '100px'}}>
                        <IconButton
                        sx={{ color: '#F76434' }}
                        aria-label={`Delete ${book.title}`}
                        onClick={() => setAddedBooks( addedBooks => addedBooks.filter(addedBook => addedBook.title !== book.title))}
                        >
                            <Delete />
                        </IconButton>

                        <IconButton
                        sx={{ color: '#FAAD00' }}
                        aria-label={`Add ${book.title}`}
                        onClick={() => setAddedBooks( addedBooks => [...addedBooks, book])}
                        >
                            <ThumbUp />
                        </IconButton>
                    </div>
                }
            />
            </ImageListItem>
        ))}
        </ImageList>
    </Container>
  )
}

export default BooksList;
