import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const SharedLayout = () => {
  return (
    <>
      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};

export default SharedLayout;
