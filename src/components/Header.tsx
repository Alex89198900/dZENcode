import TopMenu from "./TopMenu";

const Header = () => {
    return (
      <header className="d-flex flex-row-reverse p-3 sticky-top header">
        <div><TopMenu/></div>   
      </header>
    );
  }
  
  export default Header;