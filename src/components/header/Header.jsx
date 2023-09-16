import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between mt-10 border-b-2 items-center pb-3'>
      <h1 className="text-3xl font-semibold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
