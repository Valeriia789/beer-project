import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../Header/Header";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <NavigationMenu />

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
