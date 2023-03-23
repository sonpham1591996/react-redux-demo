import { Navbar } from "../components/navbar";
import { GlobalToast } from "../components/global-toast";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <GlobalToast />
      {children}
    </>
  );
};
