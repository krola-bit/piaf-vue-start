import firebase from "firebase/app";
import "firebase/auth";
import {
  adminRoot,
  currentUser,
  isAuthGuardActive
} from "../../constants/config";
import { setCurrentUser, getCurrentUser } from "../../utils";
import axios from "axios";
import router from "../../router";

export default {
  state: {
    alapZsalu: [],
    currentUser: isAuthGuardActive ? Login() : currentUser,
    loginError: null,
    processing: false,
    forgotMailSuccess: null,
    resetPasswordSuccess: null,
    userMenu: [
      {
        id: "add",
        icon: "simple-icon-plus",
        label: "menu.add",
        to: `${adminRoot}/add`,
        subs: [
          {
            icon: "",
            label: "menu.alapozas",
            to: `${adminRoot}/add/alapozas`
          }
        ]
      }
    ]
  },
  getters: {
    processing: state => state.processing,
    loginError: state => state.loginError,
    forgotMailSuccess: state => state.forgotMailSuccess,
    resetPasswordSuccess: state => state.resetPasswordSuccess,
    userMenu: state => state.userMenu
  },
  mutations: {
    setUserMenu(context, value) {
      context.commit("setUserMenu", value);
    },
    setUser(state, payload) {
      state.currentUser.id = payload.id;
      state.currentUser.title = payload.title;
      state.processing = false;
      state.loginError = null;
      console.log("user name", currentUser.title);
    },
    setLogout(state) {
      state.currentUser = null;
      state.processing = false;
      state.loginError = null;
    },
    setProcessing(state, payload) {
      state.processing = payload;
      state.loginError = null;
    },
    setError(state, payload) {
      state.loginError = payload;
      state.currentUser = null;
      state.processing = false;
    },
    setForgotMailSuccess(state) {
      state.loginError = null;
      state.currentUser = null;
      state.processing = false;
      state.forgotMailSuccess = true;
    },
    setResetPasswordSuccess(state) {
      state.loginError = null;
      state.currentUser = null;
      state.processing = false;
      state.resetPasswordSuccess = true;
    },
    clearError(state) {
      state.loginError = null;
    },
    setZsalu(state, payload) {
      state.alapZsalu = payload;
    },
    setUserMenu(state, value) {
      state.userMenu = value;
    },
    addMenu(state, ertekek) {
      const lastMenu = state.userMenu.pop();
      const tetelRoute = `${adminRoot}/ajanlat`
      const menu = {
        id: ertekek[0],
        icon: "",
        label: `menu.${ertekek[0]}`,
        to: `${adminRoot}/${ertekek[0]}`,
        subs: [],
      };
      for (let i = 1; i < ertekek.length; i++) {
        menu.subs.push({
          icon: "",
          label: `menu.${ertekek[i]}`,
          to: `${tetelRoute}/`+ `${ertekek[i]}`,
        });
      }
      state.userMenu.push(menu);
      state.userMenu.push(lastMenu);

      router.push(adminRoot);
    }
  },
  actions: {
    login({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);

      axios
        .post("http://localhost/monolit/api/public/api/login", {
          email: payload.email,
          password: payload.password
        })
        .then(response => {
          const item = {
            id: response.data.data.user.id,
            title: response.data.data.user.name
          };

          commit("setUser", item);

          router.push(adminRoot);
        })
        .catch(error => {
          console.log(error);
          setCurrentUser(null);
          commit("setError", error.message);
          setTimeout(() => {
            commit("clearError");
          }, 3000);
        });
    },
    forgotPassword({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);
      firebase
        .auth()
        .sendPasswordResetEmail(payload.email)
        .then(
          user => {
            commit("clearError");
            commit("setForgotMailSuccess");
          },
          err => {
            commit("setError", err.message);
            setTimeout(() => {
              commit("clearError");
            }, 3000);
          }
        );
    },
    resetPassword({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);
      firebase
        .auth()
        .confirmPasswordReset(payload.resetPasswordCode, payload.newPassword)
        .then(
          user => {
            commit("clearError");
            commit("setResetPasswordSuccess");
          },
          err => {
            commit("setError", err.message);
            setTimeout(() => {
              commit("clearError");
            }, 3000);
          }
        );
    },

    signOut({ commit }) {
      setCurrentUser(null);
      commit("setLogout");
      router.push("/");
    }
  }
};
