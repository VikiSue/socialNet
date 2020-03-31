import React, { Suspense } from "react";
import Loader from "../Components/reusableComponents/Loader/Loader";

export const withSuspense = Component => {
  return (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};
