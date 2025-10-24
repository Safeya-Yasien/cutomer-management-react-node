import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className=" text-white flex items-center justify-between">
      <h2 className="text-2xl ">My Customers</h2>

      <SearchBar />
    </header>
  );
};
export default Header;
