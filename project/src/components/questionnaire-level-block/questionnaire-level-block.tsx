type QuestionnaireLevelBlockProps = {
  role: string;
}

function QuestionnaireLevelBlock({role}: QuestionnaireLevelBlockProps): JSX.Element {
  return (
    <div className={`questionnaire-${role}__block`}><span className={`questionnaire-${role}__legend`}>Ваш уровень</span>
      <div className={`custom-toggle-radio custom-toggle-radio--big questionnaire-${role}__radio`}>
        <div className="custom-toggle-radio__block">
          <label>
            <input type="radio" name="level"/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Новичок</span>
          </label>
        </div>
        <div className="custom-toggle-radio__block">
          <label>
            <input type="radio" name="level" checked/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Любитель</span>
          </label>
        </div>
        <div className="custom-toggle-radio__block">
          <label>
            <input type="radio" name="level"/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Профессионал</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default QuestionnaireLevelBlock;
