import '../Style/Cards.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const Cards = ({ data }) => {
    const { image, title, snippet, author, date } = data;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: 500,
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className="Cards">
            <img src={image} alt={title} className="card-img" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{snippet}</p>
                <div className="card-meta">
                    <span className="author">{author}</span> • <span className="date">{date}</span>
                </div>

                <button className="read-more" onClick={handleOpen}>
                    Read More →
                </button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <img src={image} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
                        <Typography variant="h6" component="h2">
                            {title}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            {snippet}
                        </Typography>
                        <Typography sx={{ mt: 2, fontSize: '0.9rem', color: 'gray' }}>
                            {author} • {date}
                        </Typography>
                        <Button onClick={handleClose} sx={{ mt: 3 }} variant="contained" color="primary">
                            Close
                        </Button>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default Cards;
