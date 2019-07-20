import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default class GenreGroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => this.setState({open: !open});

  render() {
    const genreGroups = Object.values(this.props.genreGroups);

    return (
      <List className="GenreGroup">
        {genreGroups.map(genreGroup => {
          const labelId = `genreGroup-list-label`;

          return (
            <div>
              <ListItem button onClick={this.handleClick}>
                <ListItemText primary={genreGroup.booksGenreName}/>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </div>
          );
        })}
      </List>
    );
  }
}


/**
 * props の例
 *  [
 *    booksGenreId"005409001",
 *    booksGenreName: "Transportation"
 *  ]
 */
function Genre(props) {
  return (
    <div className="Genre">
      <Checkbox
        edge="start"
        tabIndex={-1}
        inputProps={{
          'aria-labelledby': 'test'
        }}
      />
      <ListItemText
        id="testId"
        primary={this.props.booksGenreName}
      />
    </div>
  );
}
