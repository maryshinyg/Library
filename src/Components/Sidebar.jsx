function Sidebar({ filter, setFilter }) {
  return (
    <div className="sidebar">
      <h2>My Library</h2>

      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Reading")}>Reading</button>
      <button onClick={() => setFilter("Read")}>Read</button>
      <button onClick={() => setFilter("DNF")}>DNF</button>
    </div>
  );
}

export default Sidebar;
