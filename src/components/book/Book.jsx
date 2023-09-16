import PropTypes from 'prop-types'

const Book = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='my-2 bg-white p-4 rounded-xl'>
            <h1 className='font-semibold'>{title}</h1>
        </div>
    );
};

Book.propTypes = {
    bookmark : PropTypes.object.isRequired,
}
export default Book;