import Sidebar from "./Sidebar";

function LibraryLayout({ children, filter, setFilter }) {
  return (
    <div className="library-layout">
      <Sidebar filter={filter} setFilter={setFilter} />

      <main className="main-content">{children}</main>
    </div>
  );
}

export default LibraryLayout;
