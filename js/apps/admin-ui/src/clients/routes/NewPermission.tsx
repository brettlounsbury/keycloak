import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generatePath } from "react-router-dom";
import type { RouteDef } from "../../route-config";

export type PermissionType = "resource" | "scope";

export type NewPermissionParams = {
  realm: string;
  id: string;
  permissionType: PermissionType;
  selectedId?: string;
};

const PermissionDetails = lazy(
  () => import("../authorization/PermissionDetails")
);

export const NewPermissionRoute: RouteDef = {
  path: "/:realm/clients/:id/authorization/permission/new/:permissionType",
  element: <PermissionDetails />,
  breadcrumb: (t) => t("clients:createPermission"),
  access: "view-clients",
};

export const NewPermissionWithSelectedIdRoute: RouteDef = {
  ...NewPermissionRoute,
  path: "/:realm/clients/:id/authorization/permission/new/:permissionType/:selectedId",
};

export const toNewPermission = (params: NewPermissionParams): Partial<Path> => {
  const path = params.selectedId
    ? NewPermissionWithSelectedIdRoute.path
    : NewPermissionRoute.path;

  return {
    pathname: generatePath(path, params),
  };
};
