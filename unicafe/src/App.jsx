import { useState } from "react";

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.name} {props.total} {props.extra}
    </p>
  );
};

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = all ? (props.good - props.bad) / all : 0;
  const percentage_positive = all ? (props.good / all) * 100 : 0;

  if (all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <StatisticLine name="good" total={props.good} />
      <StatisticLine name="neutral" total={props.neutral} />
      <StatisticLine name="bad" total={props.bad} />
      <StatisticLine name="all" total={all} />
      <StatisticLine name="average" total={average} />
      <StatisticLine name="positive" total={percentage_positive} extra="%" />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
  };
  const increaseNeutral = () => {
    setNeutral(neutral + 1);
  };
  const increaseBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header name="give feedback" />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Header name="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
