import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generatePath } from "react-router-dom";
import type { RouteDef } from "../../route-config";
import type { PermissionType } from "./NewPermission";

export type PermissionDetailsParams = {
  realm: string;
  id: string;
  permissionType: string | PermissionType;
  permissionId: string;
};

const PermissionDetails = lazy(
  () => import("../authorization/PermissionDetails")
);

export const PermissionDetailsRoute: RouteDef = {
  path: "/:realm/clients/:id/authorization/permission/:permissionType/:permissionId",
  element: <PermissionDetails />,
  breadcrumb: (t) => t("clients:permissionDetails"),
  access: "view-clients",
};

export const toPermissionDetails = (
  params: PermissionDetailsParams
): Partial<Path> => ({
  pathname: generatePath(PermissionDetailsRoute.path, params),
});
