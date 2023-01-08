
function App() {
  return (
    <>
      <div class="container">
        <div class="row">

          {/* NavBar */}
          <div class="col-12 border-bottom">

            <nav class="navbar navbar-light">
              <div class="container-fluid">
                <a class="navbar-brand">Navbar</a>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </nav>

          </div>

          {/* SideBar */}
          <div class="col-md-3 border-end">

            <div class="col-md-10">
              <br />
              <button class="btn btn-outline-secondary rounded-pill colapsed col-12" type="button" data-bs-toggle="collapse" data-bs-target={"#Машины"} aria-expanded="false" aria-controls={"Машины"}>
                <h8 class="accordion-header">Category</h8>
              </button>
              <div id={"Машины"} class="accordion-collapse collapse" aria-labelledby={"Машины"} data-bs-parent="#accordionExample">
                <div class="accordion-body ">
                  <div class="list-group rounded-pill">
                    <button type="button" class="list-group-item list-group-item-action">A second item</button>
                    <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                    <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
                    <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* MainBody */}

          <div class="col-6 col-md-9">
            <br />
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Название</th>
                  <th scope="col">Цена</th>
                  <th scope="col">Количество</th>
                  <th scope="col">Поставщик</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NVIDIA RTX 3080</td>
                  <td>1200$</td>
                  <td>30 штук</td>
                  <td>Amazon</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
