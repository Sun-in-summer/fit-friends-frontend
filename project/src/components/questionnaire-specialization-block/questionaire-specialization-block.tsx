type QuestionnaireSpecializationBlockProps = {
  role: string;
}


function QuestionnaireSpecializationBlock({role}: QuestionnaireSpecializationBlockProps): JSX.Element {
  return (
    <div className={`questionnaire-${role}__block`}><span className={`questionnaire-${role}__legend`}>Ваша специализация (тип) тренировок</span>
      <div className={`specialization-checkbox questionnaire-${role}__specializations`}>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="yoga"/><span className="btn-checkbox__btn">Йога</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="running"/><span className="btn-checkbox__btn">Бег</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="power" checked/><span className="btn-checkbox__btn">Силовые</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="aerobics"/><span className="btn-checkbox__btn">Аэробика</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="crossfit" checked/><span className="btn-checkbox__btn">Кроссфит</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="boxing" checked/><span className="btn-checkbox__btn">Бокс</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="pilates"/><span className="btn-checkbox__btn">Пилатес</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="stretching"/><span className="btn-checkbox__btn">Стрейчинг</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default QuestionnaireSpecializationBlock;
