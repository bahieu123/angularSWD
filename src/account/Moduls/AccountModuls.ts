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
  name: string;

  constructor() {
    this.email = '';
    this.roles = [];
    this.username = '';
    this.accessToken = '';
    this.name = '';
  }
}

