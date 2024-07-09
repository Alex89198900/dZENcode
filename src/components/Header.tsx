import TopMenu from "./TopMenu";

const Header = () => {
    return (
      <header className="d-flex flex-row-reverse p-3 sticky-top header bg-light shadow z-4">
        <div><TopMenu/></div>   
      </header>
    );
  }
  
  export default Header;