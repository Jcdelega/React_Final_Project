import { useState } from "react";

const TweetForm = ({ onAddTweet }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTweet(text);
    setText("");
  };

  return (
    <form className="border d-flex row" onSubmit={handleSubmit}>
      <div className="input-group flex-nowrap col-12">
        <span className="input-group-text col-2" id="addon-wrapping">
          <figure >
            <img className="img-fluid" src="./public/user-svgrepo-com.svg" alt="Profile image" />
          </figure>
        </span>
        <input 
          type="text" 
          className="form-control col-10" 
          placeholder='What are you thinking?' 
          aria-label="Username" 
          aria-describedby="addon-wrapping"
          value={text}
          onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className="d-flex justify-content-between">
        <p className="align-self-end fw-lighter text-secondary fs-6">Click tab to send</p>
        <button className="rounded-pill bg-body-secondary text-black fw-bolder py-2 px-3" type="submit">Tweet</button>
      </div>
    </form>
  );
};
export default TweetForm;