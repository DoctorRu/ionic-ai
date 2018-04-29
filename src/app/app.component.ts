import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';


declare var window;

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = HomePage;
    
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            
            
            window["ApiAIPlugin"].init(
                {
                    clientAccessToken: "d5262843d5e64c55b97924e6e11451a8", // insert your client access key here
                    lang: "en" // set lang tag from list of supported languages
                },
                function (result) { /* success processing */
                    alert(result);
                },
                function (error) { /* error processing */
                    alert(error);
                }
            );
        });
    }
}

