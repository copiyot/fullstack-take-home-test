import Button from '@mui/material/Button';
import { ImageList, Container} from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';

function MyList({books, setAddedBooks}) {

  return books.length < 1 ? <Button variant="contained">NO BOOKS ADDED......</Button> : (
    <Container>
        <ImageList gap={12} sx={{
            mb: 8,
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr)) !important'
        }}>
        {books.map((book, i) => (
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
                    <IconButton
                        sx={{ color: '#F76434' }}
                        aria-label={`Delete ${book.title}`}
                        onClick={() => setAddedBooks( addedBooks => addedBooks.filter(addedBook => addedBook.title !== book.title))}
                        >
                        <Delete />
                    </IconButton>
                }
            />
            </ImageListItem>
        ))}
        </ImageList>
    </Container>
  )
}

export default MyList;
