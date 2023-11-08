import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/service/AdminService.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
  loading = false;

  constructor(
    public authService: AdminServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  forgot(email : string) {
    this.loading = true;
    this.authService.forgotPassword(email)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate(['sign-in']);
            },
            error => {
              console.log('error', error)
              if (error && error.error && error.error.message && error.error.message.length > 0) {
                alert(error.error.message[0].messages[0].message);
              }
              else 
              {
                alert('error');
              }
              
              //this.alertService.error(error);
              this.loading = false;
            });
  }

}