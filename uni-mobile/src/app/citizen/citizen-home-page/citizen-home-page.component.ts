import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizen-home-page',
  templateUrl: './citizen-home-page.component.html',
  styleUrls: ['./citizen-home-page.component.scss']
})
export class CitizenHomePageComponent implements OnInit {

  deferredPrompt: any;
  ios: boolean;
  showInstallBtn: boolean = true;
  pwa_features: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt Event fired');
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      this.showInstallBtn = true;
    });


  }

  ngOnInit(){
    this.http.get("./assets/data-home.json")
    .subscribe(
      res => this.pwa_features = res["pwa_features"]
    )

    if(this.deferredPrompt === undefined){
      this.showInstallBtn = false;
    }
  }

  showInstallBanner() {
    if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
      // Show the prompt
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        // We no longer need the prompt.  Clear it up.
        this.deferredPrompt = null;
      });
    }
  }

  goToDetailsView(item){
    this.router.navigate(["/details", item.slug]);
  }
}
