import * as React from "react";

import notFound from "../assets/images/404.jpg";

const NotFoundPage = () => {
  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full flex justify-center">
        <img src={notFound} alt="not found"  className="h-full" />
        <span className="text-red-500 absolute top-10 text-2xl">
          Page Not Found
        </span>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
