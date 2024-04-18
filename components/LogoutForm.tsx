import { logout } from "@/app/actions";
import Button from "./CustomButton";

const LogoutForm = () => {
  return (
    <form action={logout}>
      <Button>Log out</Button>
    </form>
  );
};

export default LogoutForm;
