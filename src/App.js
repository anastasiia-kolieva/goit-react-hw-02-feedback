import { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import categories from './data/categoriesOfFeedback.js';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Приходит событие.Деструктуризация, определение того что именно на кнопку нажали event.target
  addFeedback = ({ target }) => {
    // деструктуризация=>определение на какую конкретно кнопку нажали по data атрибуту feedback ????????
    const { feedback } = target.dataset;
    // стрелочная функция вовзращает обьект/слайс, например{'good'(значение свойства feedback [feedback]) : prevState
    // именно кнопки с дата-атрибутом feedback + 1}
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={categories}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default App;
