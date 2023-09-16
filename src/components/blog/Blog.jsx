import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa'

const Blog = ({ blog, bookmarkHandler, markAsReadHandler }) => {
  const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
  return (
    <div className="my-5">
      <div className="space-y-5">
        <img className="w-full" src={cover} alt="" />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <img className="w-16" src={author_img} alt="" />
            </div>
            <div>
              <p>{author}</p>
              <small>{posted_date}</small>
            </div>
          </div>
          <div>
            <span>{reading_time} min to read</span> <button onClick={() => bookmarkHandler(blog)}> <FaBookmark></FaBookmark></button>
          </div>
        </div>
        <h1 className="text-3xl">{title} </h1>
        {
            hashtags.map((hash, idx) => <span className=' text-red-300' key={idx}>{` #${hash}`}</span>)
        }
        <div>
        <button onClick={()=>markAsReadHandler(blog.reading_time, blog.id)} className=' text-blue-400'>Mark as read</button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    bookmarkHandler : PropTypes.func,
    markAsReadHandler : PropTypes.func
}
export default Blog;
