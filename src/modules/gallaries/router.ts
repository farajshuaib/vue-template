import { RouteRecordRaw, RouterView } from "vue-router";

const route: RouteRecordRaw = {
  path: "/gallaries/",
  component: RouterView,
  name: "Gallaries",
  meta: {
    allowedPermission: [],
    title: "gallaries Management",
    Breadcrumb: [
      {
        text: "gallaries Management",
        router_name: "GallariesManagement",
      },
    ],
  },
  children: [
    {
      path: "index",
      name: "GallariesIndex",
      component: () => import("@/modules/gallaries/screens/index.vue"),
      meta: {
        allowedPermission: [],
        title: "List Gallaries"
      },      
    },
    {
      path: "create",
      name: "CreateGallery",
      component: () => import("@/modules/gallaries/screens/create.vue"),
      meta: {
        allowedPermission: [],
        title: "Create Gallaries"
      },
    },
    {
      path: "update/:id",
      name: "UpdateGallery",
      props: true,
      component: () => import("@/modules/gallaries/screens/update.vue"),
      meta: {
        allowedPermission: [],
        title: "update Gallaries"
      },
    },
  ],
};

export default route;
