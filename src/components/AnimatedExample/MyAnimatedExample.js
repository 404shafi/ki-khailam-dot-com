import ProgressBar from "react-bootstrap/ProgressBar";

function AnimatedExample({ item }) {
  const percentage = Math.floor((item.quantity / 14) * 100);
  return <ProgressBar animated now={percentage} />;
}

export default AnimatedExample;
