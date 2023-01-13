import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import DataCardIcon from '../Icons/card__data--icon.svg';
import './Card.scss';

const convertTime = (time) => {
  return new Date(time).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function MediaCard({ title, description, data, image }) {
  return (
    // <Card sx={{ width: 400, height: 530, marginBottom: 45 }}>
    <Card className="card">
      <CardMedia
        sx={{ height: 217 }}
        image={image ? image : '../components/Icons/NoImage.jpg'}
        title="green iguana"
      />
      <CardContent className="card__body">
        <Typography
          variant="body2"
          color="text.secondary"
          className="card__data--paragraph"
        >
          {/* <DataCardIcon size="20" /> */}
          {convertTime(data)}
          {/* {Date(data).toLocaleString()} */}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="card__title"
        >
          {title}
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
        {/* <Button size="small">Read more</Button> */}
        <Button color="secondary" disabled={false} className="card__button">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}
