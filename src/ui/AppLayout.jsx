import Header from "./Header";
import CartOverview from "./../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <h1>Content</h1>
        <div>......................................</div>
        <Outlet />
        <div>......................................</div>
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
