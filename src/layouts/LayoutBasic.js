import React from "react";
import { Route,Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu Sider BASIC USER</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Ignacio lara ceballos</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
    return(
    <Switch>
    {routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ))}
    </Switch>
    )
}