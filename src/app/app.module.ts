import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//added this file
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
     apiKey: "AIzaSyB3gF4oyIeCYIUj9NvlsR6_OwUmggEoUaI",
     authDomain: "fire-101.firebaseapp.com",
     databaseURL: "https://fire-101.firebaseio.com",
     projectId: "fire-101",
     storageBucket: "fire-101.appspot.com",
     messagingSenderId: "896151160724"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
