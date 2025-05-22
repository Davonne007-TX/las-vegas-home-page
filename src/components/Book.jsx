import MyLinks from "./MyLinks";
import "./css/Book.css";
export default function Book() {
  return (
    <>
      <div className="fly">
        <MyLinks />
        <div className="book-container">
          l<p className="doubt">When in doubt, head to Vegas!</p>
          <br />
          <button className="bookToday">Book Today</button>
        </div>
      </div>
    </>
  );
}
