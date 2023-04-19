export default [
  {
    path: "/",
    layout: false,
    component: "./Home",
  },
  {
    path: "/markdown",
    layout: false,
    component: "./Markdown",
  },
  {
    path: "*",
    layout: false,
    component: "./404",
  },
]
