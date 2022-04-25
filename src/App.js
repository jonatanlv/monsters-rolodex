import { useEffect, useState } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then(setMonsters);
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(
      (monster) => search === "" || monster.name.toLowerCase().includes(search)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [search, monsters]);

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="robot-search-box"
        placeholder="Search robots"
        onChangeHandler={setSearch}
      />
      <br />
      <SearchBox
        className="title-search-box"
        placeholder="Change title"
        onChangeHandler={setTitle}
      />
      <CardList items={filteredMonsters} />
    </div>
  );
};

export default App;
