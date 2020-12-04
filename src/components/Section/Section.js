import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
// // import PropTypes from 'prop-types';
// import { Component } from 'react';
// import s from './Section.module.css';

// class Section extends Component {

//   // метод как бубличное свойство =()={}
//   clickOnGood = event => {
//     this.setState(prevState => {
//       return {
//         good: prevState.good + 1,
//       };
//     });
//   };
//   clickOnNeutral = event => {
//     console.log('Кликнули в Neutral');
//     console.log(event.target);
//   };
//   clickOnBad = event => {
//     console.log('Кликнули в Bad');
//     console.log(event.target);
//   };

//   render() {
//     return (
//       <div className={s.section}>
//         <h2 className={s.title}>Please leave feedback</h2>

//         <div className={s.buttonWrapper}>
//           <button type="button" className="button" onClick={this.clickOnGood}>
//             Good
//           </button>
//           <button
//             type="button"
//             className="button"
//             onClick={this.clickOnNeutral}
//           >
//             Neutral
//           </button>
//           <button type="button" className="button" onClick={this.clickOnBad}>
//             Bad
//           </button>
//         </div>

//         <div className="statisticsWrapper">
//           <h2 className="statisticsTitle">Statistics</h2>

//           <div>
//             <span className={s.statisticsItem}>Good:{this.state.good}</span>
//             <span className={s.statisticsItem}>
//               Neutral:{this.state.neutral}
//             </span>
//             <span className={s.statisticsItem}>Bad:{this.state.bad}</span>
//             <span className={s.statisticsItem}>Total:</span>
//             <span className={s.statisticsItem}>Positive feedback:</span>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Section;
