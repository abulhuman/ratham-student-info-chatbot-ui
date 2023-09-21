import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <nav className="py-6 px-10 shadow-xl bg-slate-50">
          <ul className="flex justify-between items-center">
            <li>
              <Link to="/"><img className="w-12" src="https://ratham.in/wp-content/uploads/2023/05/Og_only_icon-svg.png" alt="Ratham Logo"  /></Link>
            </li>
          </ul>
        </nav>
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    </>
  );
}
