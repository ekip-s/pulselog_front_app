import { useEffect } from "react";
import Keycloak from "../auth/keycloak";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authActions from "./../store/auth-slice";

const keycloak = Keycloak;

const useKeycloak = () => {
  const isAuth = useSelector((state) => state.auth.authenticated);
  const dispatchActions = useDispatch();
  const navigate = useNavigate();

  const addAuthInfoHandler = (auth) => {
    dispatchActions(authActions.actions.authInit(auth));
  };

  useEffect(() => {
    if (!isAuth) {
      keycloakInit();
    }
  }, [isAuth]);

  const keycloakInit = () => {
    if (isAuth) {
      return;
    }

    keycloak
      .init({ onLoad: "check-sso" })
      .then((auth) => {
        addAuthInfoHandler(auth);
      })
      .catch((e) => console.log("Ошибка: " + e));
  };

  const loginHandler = () => {
    keycloak
      .login()
      .then(() => {
        addAuthInfoHandler(true);
        navigate("/objective");
      })
      .catch(() => {
        addAuthInfoHandler(false);
        navigate("/home");
      });
  };

  const logoutHandler = () => {
    keycloak.logout();
    navigate("/home");
  };

  return { keycloakInit, loginHandler, logoutHandler, isAuth };
};

export default useKeycloak;
