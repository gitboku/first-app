import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { ExpansionPanel, Typography, ExpansionPanelDetails, ListItemSecondaryAction } from '@material-ui/core';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/**
 * props の例
 *  [
 *    0: [
 *      id: 1,
 *      booksGenreName: "Travel（旅行）",
 *      genres: [
 *        （略）
 *      ]
 *    ],
 *    1: [] ...
 *  ]
 */
export default class GenreGroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    const genreGroups = Object.values(this.props.genreGroups);

    if (genreGroups.length === 0) {
      return <div />;
    }

    return (
      <List className="GenreGroup">
        {genreGroups.map((genreGroup, id) => {
          return (
            <GenreGroup key={id} genreGroup={genreGroup} id={id} />
          );
        })}
      </List>
    );
  }
}

const genreGroupStyles = makeStyles(theme => ({
  root: {
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  }
}));

/**
 * props の例
 *  [
 *    id: 1,
 *    booksGenreName: "Travel（旅行）",
 *    genres: [
 *      0: [
 *        booksGenreId: "005409001",
 *        booksGenreName: "Transportation"
 *      ],
 *      1: ...
 *    ]
 *  ]
 */
function GenreGroup(props) {
  const classes = genreGroupStyles();
  const genres = props.genreGroup.genres;
  const id = props.id;

  let shapeTitle = (title) => {
    let start = title.indexOf('（');
    let end = title.lastIndexOf('）');
    if (start === -1 || end === -1) {
      return title;
    }
    return title.substring(start + 1, end);
  }

  return (
    <ExpansionPanel id={`genre-group-${id}`}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={`panel1a-header-${id}`}
      >
        <Typography className={classes.heading}>{shapeTitle(props.genreGroup.booksGenreName)}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List className={classes.list}>
          {genres.map((genre, id) => {
            return (
              <Genre key={id} genre={genre} id={id} />
            );
          })}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}


/**
 * props の例
 *  [
 *    booksGenreId"005409001",
 *    booksGenreName: "Transportation"
 *  ]
 */
function Genre(props) {
  const id = props.id;
  const [checked, setChecked] = React.useState(true);

  const handleToggle = () => setChecked(!checked);

  return (
    <ListItem key={id}>
      <ListItemText
       id={`genre${id}`}
       primary={props.genre.booksGenreName}
      />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          onChange={handleToggle}
          checked={checked}
          inputProps={{
            'aria-labelledby': id
          }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
}
