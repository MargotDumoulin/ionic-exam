import { Geolocation } from '@ionic-native/geolocation';
import { LocationPageModule } from './../pages/location/location.module';
import { ComponentsModule } from './../components/components.module';
import { AboutPageModule } from './../pages/about/about.module';
import { ChampionNewPageModule } from '../pages/champion-list/champion-new/champion-new.module';
import { ChampionPageModule } from '../pages/champion-list/champion/champion.module';
import { ChampionListPageModule } from '../pages/champion-list/champion-list.module';
import { TabPageModule } from './../pages/tab/tab.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChampionProvider } from '../providers/champion/champion';
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
    ChampionListPageModule,
    ChampionPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    ChampionNewPageModule,
    AboutPageModule,
    ComponentsModule,
    LocationPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChampionProvider,
    Geolocation
  ]
})
export class AppModule {}
