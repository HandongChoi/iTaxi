import { Component } from '@angular/core';
import { IonicPage, NavController, Alert, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; 
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})

export class ResetPasswordPage {

  public resetPasswordForm:FormGroup; 

  constructor(public navCtrl:NavController, public authProvider:AuthProvider, public alertCtrl:AlertController, formBuilder:FormBuilder) {
    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
    });
  }

  resetPassword():void {
    if (!this.resetPasswordForm.valid){
    console.log(`Form isn't valid, value: ${this.resetPasswordForm.value}`);
    } else {
      const email:string = this.resetPasswordForm.value.email; 
      this.authProvider.resetPassword(email).then( user => {
        const alert:Alert = this.alertCtrl.create({
          message: "Check your email for a password reset link", 
          buttons: [{
            text: "Ok", 
            role: 'cancel',
            handler: () => { this.navCtrl.pop() } 
          }]
        });
        alert.present()
      }, error => {
        const errorAlert = this.alertCtrl.create({ 
          message: error.message,
          buttons: [{ text: "Ok", role: "cancel" }]
        });
        errorAlert.present();
      }); 
    }
  }
 
}
