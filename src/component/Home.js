import Search from "./Search";

const Home = ({ theme }) => {
  return (
    <div className={theme}>
      <Search theme={theme} />
    </div>
  );
};
export default Home;
