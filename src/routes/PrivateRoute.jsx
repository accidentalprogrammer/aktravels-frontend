import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function PrivateRoute({
  component,
  ...rest
}) {

  return (
    <Route
      {...rest}
      render={(props) =>
        true ? (
          <React.Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}
