import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LoginButton.module.css";
export default function LogInButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button className={styles.btn_login} onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </div>
  );
}
