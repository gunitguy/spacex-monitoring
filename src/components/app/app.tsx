import { StrictMode, FC } from "react";
import { hot } from "react-hot-loader/root";

import Launches from "../../views/launches";
import withLayout from "../../hoc/with-layout";

const App: FC = () => {
  const content = withLayout(<Launches />);

  return <StrictMode>{content}</StrictMode>;
};

export default hot(App);
