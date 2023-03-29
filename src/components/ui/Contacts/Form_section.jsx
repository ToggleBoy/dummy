import "./Form_section.css";

function Form_section() {
  return (
    <div className="box">
      <form>
        <div className="input-container">
          <input type="email" required="" />
          <label>Email</label>
        </div>
        <div className="input-container">
          <input type="email" required="" />
          <label>Full Name</label>
        </div>
        <div className="input-container">
          <textarea className="text-area" placeholder="Comment" />
        </div>
        <button type="button" className="button tooltip" disabled="disabled">
          submit <span class="tooltiptext">Under Progression</span>
        </button>
      </form>
    </div>
  );
}

export default Form_section;
