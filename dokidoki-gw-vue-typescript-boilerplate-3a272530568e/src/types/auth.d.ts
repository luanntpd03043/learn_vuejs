declare namespace Auth {
  type UserCertificate = {
    email: string;
    password: string;
  };

  type User = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };

  type UserAuthentication = {
    user: User;
    token: string;
  };
}
