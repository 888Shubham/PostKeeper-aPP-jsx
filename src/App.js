import "./styles.css";
import { Navbar } from "./Navbar";
import { List } from "./List";
import { CustomPostContex } from "./postContext";

export default function App() {
  return (
    //Add the Context provider here
    <CustomPostContex>
    <div className="App">
      <Navbar />
      <List />
    </div>
    </CustomPostContex>
  );
}
