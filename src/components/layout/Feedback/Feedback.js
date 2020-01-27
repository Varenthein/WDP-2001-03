import React from 'react';
import PropTypes from 'prop-types';

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

    const dots = [];
    for (let i = 0; i < commentsCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

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
          <div className='col-12'>
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          {feedback.map(comment => (
            <Comment key={feedback.indexOf(comment)} {...comment} />
          ))}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.array,
};

export default Feedback;
