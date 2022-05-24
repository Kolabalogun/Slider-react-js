import React from "react";
import Text from "./Text";
import "./Style.css";

const Home = () => {
  const [count, countF] = React.useState(0);
  const [text, textF] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let amount = parseInt(count)

if (count <=0 ) {
  amount = 1
}
if (count > 10) {
  amount = 10
}

    textF(Text.slice(0,amount))
  }
  function handleChange(e) {
    countF(e.target.value)
  }

  const para = text.map((T, index) => <p key={index} >{T}</p>)

  return (
    <div className="main">
      <h1>Generate Paragraphs</h1>
      <div className="line"></div>

      <form onSubmit={handleSubmit} className="action">
        <label htmlFor="input">Paragraph:</label>
        <input type="number" value={count} id="input" onChange={handleChange} />
        <button type="submit">GENERATE</button>
      </form>

      <div className="para">
        {para}
      </div>
    </div>
  );
};

export default Home;
