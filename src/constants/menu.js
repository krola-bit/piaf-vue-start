import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [{
  id: "basis",
  icon: "",
  label: "menu.basis",
  to: `${adminRoot}/basis`,
  subs: [{
    icon: "",
    label: "menu.colop",
    to: `${adminRoot}/basis/colop`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "",
    label: "menu.basebeam",
    to: `${adminRoot}/basis/basebeam`,
  }
  ]
},
{
  id: "second-menu",
  icon: "",
  label: "menu.second-menu",
  to: `${adminRoot}/second-menu`,
  subs: [{
    icon: "",
    label: "menu.second",
    to: `${adminRoot}/second-menu/second`,
  },
  ]
},
{
  id: "pages",
  icon: "",
  label: "menu.pages",
  to: "/user/login",
  subs: [{
    icon: "",
    label: "menu.login",
    to: "/user/login",
    newWindow: true
  }, {
    icon: "",
    label: "menu.register",
    to: "/user/register",
    newWindow: true
  }, {
    icon: "",
    label: "menu.forgot-password",
    to: "/user/forgot-password",
    newWindow: true
  },
  {
    icon: "",
    label: "menu.reset-password",
    to: "/user/reset-password",
    newWindow: true
  }
  ]
},
{
  id: "single",
  icon: "",
  label: "menu.single",
  to: `${adminRoot}/single`,
},
{
  id: "docs",
  icon: "",
  label: "menu.docs",
  to: "https://piaf-vue-docs.coloredstrategies.com/",
  newWindow: true
}
];
export default data;
