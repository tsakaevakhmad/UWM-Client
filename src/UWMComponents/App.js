import NavbarComponent from "./AppComponents/NavbarComponent";
import SidebarComponent from "./AppComponents/SidebarComponent";
import MainComponent from "./AppComponents/MainComponent";

function App() {
  return (
    <>
      <div className="container">
        <br/>
        <div className="row">

          {/* NavBar */}
          <div className="col-12 border-bottom">
            <NavbarComponent></NavbarComponent>
          </div>

          {/* SideBar */}
          <div className="col-md-3 border-end">
            <SidebarComponent></SidebarComponent>
          </div>

          {/* MainBody */}
          <div className="col-6 col-md-9">
            <MainComponent></MainComponent>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
