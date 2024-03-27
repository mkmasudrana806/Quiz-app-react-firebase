import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import Progressbar from "../Progressbar";

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <Progressbar />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
