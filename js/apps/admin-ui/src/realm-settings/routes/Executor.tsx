import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generatePath } from "react-router-dom";
import type { RouteDef } from "../../route-config";

export type ExecutorParams = {
  realm: string;
  profileName: string;
  executorName: string;
};

const ExecutorForm = lazy(() => import("../ExecutorForm"));

export const ExecutorRoute: RouteDef = {
  path: "/:realm/realm-settings/client-policies/:profileName/edit-profile/:executorName",
  element: <ExecutorForm />,
  breadcrumb: (t) => t("realm-settings:executorDetails"),
  access: ["manage-realm"],
};

export const toExecutor = (params: ExecutorParams): Partial<Path> => ({
  pathname: generatePath(ExecutorRoute.path, params),
});
