import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Highlighter from 'react-highlight-words';
import Typography from '@mui/material/Typography';
import { CardDateIcon } from '../Icons/cardDateIcon.tsx';
import { CardBtnArrow } from '../Icons/cardBtnArrow.tsx';
import './Card.scss';

const convertTime = (time) => {
  return new Date(time).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function MediaCard({
  title,
  description,
  data,
  image,
  filterArr,
}) {
  return (
    <Card className="card">
      <CardMedia
        sx={{ height: 217 }}
        // image="../components/Icons/NoImage.jpg"
        image={image ? image : '../components/Icons/NoImage.jpg'}
        title={title}
      />
      <CardContent className="card__body">
        <Typography
          variant="body2"
          color="text.secondary"
          className="card__date"
        >
          <span className="card__date--span">
            <CardDateIcon className="card__date--icon" />
          </span>
          {convertTime(data)}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="card__title"
        >
          {title && (
            <Highlighter searchWords={filterArr} textToHighlight={title} />
          )}
          {/* {title} */}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="card__description"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" disabled={false} className="card__button">
          Read more
          <span className="card__button--span">
            <CardBtnArrow />
          </span>
        </Button>
      </CardActions>
    </Card>
  );
}
