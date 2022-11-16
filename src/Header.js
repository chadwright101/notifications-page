import "./index.css";

function Header() {
  return (
    <header className="flex justify-between py-6 items-center">
      <div className="flex gap-2 items-center">
        <h1 className="text-xl font-semibold">Notifications</h1>
        <span className="text-project-white2 bg-project-blue px-3 py-px rounded-md font-semibold">
          3
        </span>
      </div>
      <h3 className="text-sm text-project-grey">Mark all as read</h3>
    </header>
  );
}

export default Header;
