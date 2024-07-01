
import dynamic from "next/dynamic";



const DynamicClientSocket = dynamic(() => import("../socket/client"), {
  ssr: false,
});

const DynamicDatetime = dynamic(() => import("./DateTime"), {
  ssr: false,
});

const TopMenu = () => {
  return (
    <div className="m-0 d-flex align-items-end gap-3">
      <DynamicDatetime />
      <DynamicClientSocket />
    </div>
  );
};

export default TopMenu;
