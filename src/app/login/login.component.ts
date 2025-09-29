import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../service/auth.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatCardModule,MatButtonModule,MatInputModule,ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {

  loginForm: FormGroup;
  invalidLogin: boolean=false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
   this.loginForm = this.fb.group({
    'username': ['', [Validators.required, Validators.minLength(4)]],
    'password': ['', [Validators.required, Validators.minLength(4)]]
  })
  }

 ngonInit():void{
 
 }
  
 login(){
 if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value) .subscribe(result => { 
        if (result)
          this.router.navigate(['/home']);
        else  
          this.invalidLogin = true; 
      });
}
 }
 
}