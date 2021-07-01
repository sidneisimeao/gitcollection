import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
const Dashboard = lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: 'dashboard' */
      '../pages/Dashboard'
    ),
);
const Repo = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: 'repo' */ '../pages/Repo'
    ),
);

export const Routes: React.FC = () => {
  return (
    <Suspense fallback={'Aplicação carregando'}>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={Repo} path="/repositories/:repository+" />
      </Switch>
    </Suspense>
  );
};
