import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import DataCardIcon from '../Icons/card__data--icon.svg';
import './Card.scss';

export default function MediaCard({ title, description, data, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image ? image : '../components/Icons/NoImage.jpg'}
        title="green iguana"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className="card__data--paragraph"
        >
          {/* <DataCardIcon size="20" /> */}
          June 29th, 2021 {data}
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
      <CardActions style={{ paddingTop: 0 }}>
        {/* <Button size="small">Read more</Button> */}
        <Button color="secondary" disabled={false} className="card__button">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}
