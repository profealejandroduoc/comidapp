import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-scanear',
  templateUrl: './scanear.page.html',
  styleUrls: ['./scanear.page.scss'],
})
export class ScanearPage implements OnInit {

  constructor(private barcodescn:BarcodeScanner) { }

  ngOnInit() {
  }

  scanea(){
    let fake='{"texto": "Hola", format:"fdjdj", cancelled:"algo"}';
    console.log(fake.split(','));

   /* console.log("Scaneado");
    this.barcodescn.scan().then(lectura=>{
      console.log(lectura);
    }).catch(err=>
      {
        console.log("Error al leer");
      })*/
  }
}
