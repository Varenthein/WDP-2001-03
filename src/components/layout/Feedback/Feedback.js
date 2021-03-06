import React from 'react';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-swipeable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import Comment from '../../common/Comment/Comment';

import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { feedback } = this.props;
    const { activePage } = this.state;

    const commentsCount = Math.ceil(feedback.length);

    const dots = [...Array(commentsCount).keys()].map(i => (
      <li key={i}>
        <a
          onClick={() => this.handlePageChange(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    ));

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className={styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          <Swipeable
            onSwipedLeft={e =>
              (activePage > 0) & (activePage <= commentsCount) &&
              this.handlePageChange(activePage - 1)
            }
            onSwipedRight={e =>
              activePage < commentsCount - 1 && this.handlePageChange(activePage + 1)
            }
          >
            {feedback.slice(activePage, activePage + 1).map(comment => (
              <Comment key={comment.id} {...comment} />
            ))}
          </Swipeable>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.array,
};

export default Feedback;
