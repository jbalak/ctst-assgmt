const USER_ROLES = ["user", "admin"];
const policies = [
  "/users_get__admin",
  "/users/:id_get__admin",
  "/users/:id/todo/:id_get__admin",
  "/users/:id/todo_get__admin",
  "/users/:id/posts/:id/comments_post__admin",
  "/users/:id/posts/:id/comments_get__admin",
  "/users/:id/posts/:id/comments/:id_get__admin",
  "/users/:id/posts/:id/comments/:id_patch__admin",
  "/users/:id/posts_get__admin",
  "/users/:id/posts/:postId_get__admin",
  "/users_get__admin",
  "/users/:id_get__admin",
  "/users/:id__patch__admin",
  "/users/:id_put__admin",
  "/users/:id/todo/:id_get__admin",
  "/users/:id/todo_get__admin",
  "/users_get__user",
  "/users/:id_get__user",
  "/users/:id/todo/:id_get__user",
  "/users/:id/todo_get__user",
  "/users/:id/posts/:id/comments_post__user",
  "/users/:id/posts/:id/comments_get__user",
  "/users/:id/posts/:id/comments/:id_get__user",
  "/users/:id/posts/:id/comments/:id_patch__user",
  "/users/:id/posts_get__user",
  "/users/:id/posts/:postId_get__user",
];
module.exports = {
  USER_ROLES,
  RBAC_POLICIES: policies,
};
