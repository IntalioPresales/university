import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// Import FilePond
import * as FilePond from 'filepond';

// Import the plugin code
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { reduce } from 'rxjs/operators';
declare global {
  interface Window {
    initCredit;
  }
}


// Register the plugin
FilePond.registerPlugin(FilePondPluginImagePreview);
@Component({
  selector: 'app-new-request-form',
  templateUrl: './new-request-form.component.html',
  styleUrls: ['./new-request-form.component.scss'],
})
export class NewRequestFormComponent implements OnInit {
  userForm: FormGroup;
  panelOpenState = false;
  @ViewChild('myPond', { static: true }) myPond: any;
  defaultHref = '/citizen/home';
  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png'
  }

  pondFiles = [
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  ngAfterViewInit(): void {
    // this.loadScripts()
    this.loadScript("./assets/js/credit.js")
    this.loadScript("https://cdnjs.cloudflare.com/ajax/libs/imask/3.4.0/imask.min.js")
    setTimeout(() => {
      window.initCredit()
    }, 200);
  }
  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  loadScripts() {
    const externalScriptArray = [
      "./assets/js/credit-card.js",
      "https://cdnjs.cloudflare.com/ajax/libs/imask/3.4.0/imask.min.js"
    ];
    for (let i = 0; i < externalScriptArray.length; i++) {
      const scriptTag = document.createElement("script");
      scriptTag.src = externalScriptArray[i];
      scriptTag.type = "text/javascript";
      scriptTag.async = false;
      scriptTag.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(scriptTag);
    }
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }


}
