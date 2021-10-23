import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  test?: string;

  constructor(private elementRef: ElementRef, private render: Renderer2) {

  }

  ngOnInit(): void {

  }

  ngAfterContentInit() {
    //this.render.setProperty(document.querySelector("button"), "id", "test");
    document.querySelector("#formulario")?.addEventListener("click", (e) => {

    });
  }


  // getFile(event!:Event) {

  //   let fileList: FileList = event.target.files;
  //   let formData: FormData = new FormData();
  //   for (const file of fileList) {
  //       formData.append('some name', file, file.name) // file.name is optional
  //   }

  // }

}
