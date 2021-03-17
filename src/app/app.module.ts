import { AboutPageModule } from './../pages/about/about.module';
import { ChampionsNewPageModule } from './../pages/champions-list/champions-new/champions-new.module';
import { ChampionsPageModule } from './../pages/champions-list/champions/champions.module';
import { ChampionsListPageModule } from './../pages/champions-list/champions-list.module';
import { TabPageModule } from './../pages/tab/tab.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChampionsProvider } from '../providers/champions/champions';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebase = {
  apiKey: "AIzaSyDtsstlHvbphloK6k_JqTSEvJ6dgyLJAkg",
  authDomain: "td-first-angular.firebaseapp.com",
  databaseURL: "https://td-first-angular-default-rtdb.firebaseio.com",
  projectId: "td-first-angular",
  storageBucket: "td-first-angular.appspot.com",
  messagingSenderId: "841563299843",
  appId: "1:841563299843:web:a58627b19102bcaf0cee36"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TabPageModule,
    ChampionsListPageModule,
    ChampionsPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    ChampionsNewPageModule,
    AboutPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChampionsProvider
  ]
})
export class AppModule {}
