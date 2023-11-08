export class AuthenticateModul {
  username: string | undefined;
  password: string | undefined;
}

export class TokenData {
  accessToken: string;
  userId: number | undefined;
  roles: number[];
  username: string;
  email: string;

  constructor() {
    this.email = '';
    this.roles = [];
    this.username = '';
    this.accessToken = '';
  }
}

export class ResetPassword {
  username: string | undefined;
  newpassword: string | undefined;
  oldpassword: string | undefined;
}

