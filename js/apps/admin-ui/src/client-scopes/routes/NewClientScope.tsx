import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generatePath } from "react-router-dom";
import type { RouteDef } from "../../route-config";

export type NewClientScopeParams = { realm: string };

const CreateClientScope = lazy(() => import("../CreateClientScope"));

export const NewClientScopeRoute: RouteDef = {
  path: "/:realm/client-scopes/new",
  element: <CreateClientScope />,
  breadcrumb: (t) => t("client-scopes:createClientScope"),
  access: "manage-clients",
};

export const toNewClientScope = (
  params: NewClientScopeParams
): Partial<Path> => ({
  pathname: generatePath(NewClientScopeRoute.path, params),
});
