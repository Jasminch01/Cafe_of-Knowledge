import PropTypes from "prop-types";
import Book from "../book/Book";

const Bookmark = ({ bookmarks, markAsRead }) => {
  return (
    <>
      <div className="w-1/3 space-y-5">
        <div className=" bg-slate-200 p-5 rounded-xl mt-10">
          <h1 className="text-xl font-bold">Spand time to read : {markAsRead} mins</h1>
        </div>
        <div className="  bg-slate-200 p-5 rounded-xl">
          <h2 className="text-xl  font-bold">
            Bookmarks : {bookmarks.length}{" "}
          </h2>
          {bookmarks.map((bookmark, idx) => (
            <Book bookmark={bookmark} key={idx}></Book>
          ))}
        </div>
      </div>
    </>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  markAsRead: PropTypes.number.isRequired,
};

export default Bookmark;
