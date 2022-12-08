import ItemListContainer from "../src/components/itemListContainer/ItemListContainer";
import Navbar from "../src/components/navBar/NavBar"

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={" Soluciones con Tecnologia RFID ┃ "} />
    </div>
  );
  
}
  
export default App;
