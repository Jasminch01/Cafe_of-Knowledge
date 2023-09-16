import { useState } from "react"
import Blogs from "./components/bolgs/Blogs"
import Bookmark from "./components/bookmark/bookmark"
import Header from "./components/header/Header"

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);
  const bookmarkHandler = (blog) => {
    const newBookmarks = [...bookmarks ,blog]
    setBookmarks(newBookmarks);
  }

const markAsReadHandler = (time,id) => {
  setMarkAsRead(markAsRead + time);
  const removeItems = bookmarks.filter((bookmak => bookmak.id !== id));
  setBookmarks(removeItems)
}
  return (
    <>
      <Header></Header>
      <main className="flex gap-5 justify-center">
      <Blogs bookmarkHandler = {bookmarkHandler} markAsReadHandler = {markAsReadHandler}></Blogs>
      <Bookmark bookmarks = {bookmarks} markAsRead = {markAsRead}></Bookmark>
      </main>
    </>
  )
}

export default App
