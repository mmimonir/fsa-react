import ListItem from "./components/List_item";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <ListItem name="List Item One" />
        <ListItem name="List Item Two" />
        <ListItem name="List Item Three" />
      </ul>
    </div>
  );
};

export default App;
