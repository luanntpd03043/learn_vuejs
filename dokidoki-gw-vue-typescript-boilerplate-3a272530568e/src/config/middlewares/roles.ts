export function guest(context: App.RouteContext): void {
  const { next, isLoggedIn, user } = context;
  if (isLoggedIn) {
    return next({ name: 'Home' });
  }

  return next();
}

export function auth(context: App.RouteContext): void {
  const { next, isLoggedIn } = context;
  if (isLoggedIn) {
    return next();
  }

  return next({ name: 'SignIn' });
}
