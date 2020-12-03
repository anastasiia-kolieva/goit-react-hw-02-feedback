import { render } from '@testing-library/react';
// import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Section.module.css';

class Section extends Component {
  render() {
    return (
      <div className={s.section}>
        <h2 className={s.title}>Please leave feedback</h2>

        <div className={s.buttonWrapper}>
          <button
            type="button"
            className="button"
            onClick={() => console.log('Кликнули в Good')}
          >
            Good
          </button>
          <button
            type="button"
            className="button"
            onClick={() => console.log('Кликнули в Neutral')}
          >
            Neutral
          </button>
          <button
            type="button"
            className="button"
            onClick={() => console.log('Кликнули в Bad')}
          >
            Bad
          </button>
        </div>
      </div>
    );
  }
}

export default Section;
