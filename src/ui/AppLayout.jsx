import Header from './Header';
import CartOverview from './../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  // console.table([navigation, isLoading]);

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        {/* <h1>Content</h1> */}
        {/* <div>......................................</div> */}
        <Outlet />
        {/* <div>......................................</div> */}
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
