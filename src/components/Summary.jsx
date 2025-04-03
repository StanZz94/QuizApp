import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {

    return (<div id="summary">
        <img src={quizComplete} alt='quiz complete' />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className="number">10%</span>
                <span className="text">skipped</span>
            </p>
            <p>
                <span className="number">10%</span>
                <span className="text">answered correctly</span>
            </p>
            <p>
                <span className="number">10%</span>
                <span className="text">answered wrong</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer';

                if (answer === null) {
                    cssClass += ' skipped';
                } else if (answer === QUESTIONS[index].answers[0]) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }

                return (<li>
                    <h3>{index + 1}</h3>
                    <p className="question">{QUESTIONS[index].text}</p>
                    <p className={cssClass}>{answer ?? "Skipped"}</p>
                </li>)
            })}
        </ol>
    </div>
    )
}