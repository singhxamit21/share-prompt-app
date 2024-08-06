// The Provider component is a wrapper that uses the SessionProvider from next-auth to manage user authentication sessions. By wrapping your application or parts of it with this Provider, you can ensure that session data is properly managed and accessible throughout the component tree.

'use client';

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;