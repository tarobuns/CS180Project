import "./rightbar.scss"
//making the right bar a notepad for now
//might change depending on how back-end is doing
//possible ideas: spotlight feature, profile suggestions
const RightBar = () => {
  return (
    <div className="rightbar">
        <div className="container">
            <div className="notepad">
                <span> Notes: </span>
                <div className="notebox">
                    <textarea placeholder="Write Notes down here..."></textarea>
                    <button>Save Note</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RightBar