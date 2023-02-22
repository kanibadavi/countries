import Search from "./Search";
import Cards from "./Cards";
const Home = ({ theme }) => {
  return (
    <div className={theme}>
      <Search theme={theme} />
    </div>
  );
};
export default Home;
