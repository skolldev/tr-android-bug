import { Component } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  ImageOptions,
} from '@capacitor/camera';
import { defer } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  public takePicture() {
    const options: ImageOptions = {
      resultType: CameraResultType.Uri,
      quality: 50,
      source: CameraSource.Camera,
      correctOrientation: true,
    };

    defer(() => Camera.getPhoto(options)).subscribe((photo) =>
      console.log(photo)
    );
  }
}
