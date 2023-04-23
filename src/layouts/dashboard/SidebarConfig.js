// routes
import { PATH_DASHBOARD, PATH_PAGE } from "../../routes/paths";
// components
import Label from "../../components/Label";
import SvgIconStyle from "../../components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: "100%", height: "100%" }}
  />
);
const WalletBalance = "21";
const ICONS = {
  blog: getIcon("ic_blog"),
  cart: getIcon("ic_cart"),
  chat: getIcon("ic_chat"),
  mail: getIcon("ic_mail"),
  user: getIcon("ic_user"),
  kanban: getIcon("ic_kanban"),
  banking: getIcon("ic_banking"),
  calendar: getIcon("ic_calendar"),
  ecommerce: getIcon("ic_ecommerce"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
  booking: getIcon("ic_booking"),
  addUser: getIcon("ic_add_user"),
  viewUsers: getIcon("ic_view_users"),
  employee: getIcon("ic_employee"),
  addProject: getIcon("ic_add_project"),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    items: [
      {
        title: "Dashboard",
        path: PATH_DASHBOARD.general.app,
        // path: PATH_PAGE.comingSoon,
        icon: ICONS.dashboard,
      },
    ],
  },
  // MANAGEMENT : E-COMMERCE
  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: "Product-Management",
    items: [
      // MANAGEMENT : USER

      // MANAGEMENT : E-COMMERCE
      {
        title: "Product",
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [
          {
            title: "create-product",
            path: PATH_DASHBOARD.general.addProduct,
          },
          {
            title: "view-product",
            path: PATH_DASHBOARD.general.viewProduct,
          },

          // { title: "checkout", path: PATH_DASHBOARD.eCommerce.checkout },
          // { title: "invoice", path: PATH_DASHBOARD.eCommerce.invoice },
        ],
      },
    ],
  },
  {
    subheader: "Category-Management",
    items: [
      // MANAGEMENT : USER

      // MANAGEMENT : E-COMMERCE
      {
        title: "Category",
        path: PATH_DASHBOARD.general.root,
        icon: ICONS.cart,
        children: [
          {
            title: "create-category",
            path: PATH_DASHBOARD.general.addCategory,
          },
          {
            title: "view-category",
            path: PATH_DASHBOARD.general.viewCategory,
          },

          // { title: "checkout", path: PATH_DASHBOARD.eCommerce.checkout },
          // { title: "invoice", path: PATH_DASHBOARD.eCommerce.invoice },
        ],
      },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
];

export default sidebarConfig;
