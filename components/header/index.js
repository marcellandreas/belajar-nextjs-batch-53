import Menu from "../menu";
import { withAuth } from "../withAuth";

function Header() {
  return (
    <div>
      <Menu />
    </div>
  );
}

export default withAuth(Header);
