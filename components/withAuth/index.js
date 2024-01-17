export function withAuth(Component) {
  return function WithAuth(props) {
    const isLogin = false;

    if (!isLogin) return <div>Anda Harus Login</div>;

    return <Component {...props} />;
  };
}
