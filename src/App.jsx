import "./App.css";
import ContactsList from "./components/ContactsList";
import ContactsCard from "./components/ContactsCard";

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <ContactsList />
    </div>
  );
}

export default App;