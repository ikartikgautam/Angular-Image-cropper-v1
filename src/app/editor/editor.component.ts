import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  x = 10;
  y = 10;

  cropForm = this.fb.group({
    xVal: this.fb.control(10),
    yVal: this.fb.control(10),
  })

  uri;
  img;

  upload(file) {
    this.img = file[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.img);
    reader.onload = _event => {
      this.uri = reader.result;
    }

    console.log(this.cropForm)

  }

  crop() {
    var c: any = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, this.cropForm.value.xVal, this.cropForm.value.yVal);
  }

}
