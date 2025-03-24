import { Bars3Icon } from "@heroicons/react/16/solid";
import { PropsWithChildren } from "react";
import Sidebar from "./sidebar";

type Props = PropsWithChildren;
const MobileNavbar = (props: Props) => {
  return (
    <div className="md:hidden">
      <Sidebar
        triggerIcon={<Bars3Icon className="w-6" />}
        triggerClassName="absolute top-2 left-2"
      >
        {props.children}
      </Sidebar>
    </div>
  );
};

export default MobileNavbar;
