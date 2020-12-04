// import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

const Statistics = (good, neutral, bad, total, positivePercentage) => {
  return (
    //   react фрагмент: https://ru.reactjs.org/docs/fragments.html#short-syntax
    <>
      {/* Если total>0, тогда рендерится список */}
      {total > 0 && (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}</li>
        </ul>
      )}

      {/* если total=0, отображается сообщение */}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

export default Statistics;
