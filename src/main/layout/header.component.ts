import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenData } from 'src/account/Moduls/AccountModuls';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit{
  profileToken: TokenData=new TokenData();
  constructor (private router: Router){
  }

  ngOnInit(): void {
    this.profile();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/account/login']);
  }

  profile() {
    // Lấy token từ Local Storage
    const token = localStorage.getItem('token');

    if (token) {
      // Tạo một thể hiện của JwtHelperService
      const jwtHelper = new JwtHelperService();

      // Giải mã token
      const decodedToken = jwtHelper.decodeToken(token);

      // Gán thông tin từ token vào đối tượng TokenData
      this.profileToken.accessToken = token;
      this.profileToken.userId = decodedToken.sub;
      this.profileToken.roles = decodedToken.rol;
      this.profileToken.username = decodedToken.preferred_username;
      this.profileToken.email = decodedToken.email;
    } else {
      console.log('Token không tồn tại hoặc không hợp lệ');
    }
  }
}
