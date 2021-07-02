import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'simplemapangular11';


  ngOnInit(): void{
    this.map();
  }

  map(){
    let node = document.createElement('script');
    node.src = './assets/countrymap.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

    let node1 = document.createElement('script');
    node1.src = './assets/mapdata.js';
    node1.type = 'text/javascript';
    node1.async = true;
    node1.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node1);

        //#region css map
        $('#map').css('width', '100%');
        $('#map_access').css('width', '100%');
        $('svg').css('width', '100%');
        $('#map_inner').find('svg').css('left', '15%');

        //#endregion

        let res = [
           {
            lat: "24.86",
            lng: "67.01",
            name: "Karachi",
            description: "50"
          },
           {
            lat: "31.5497",
            lng: "74.3436",
            name: "Lahore",
            description: "60"
          },
          {
            lat: "32.5",
            lng: "74.5333",
            name: "Sialkot City",
            description: "70"
          },
           {
            lat: "31.418",
            lng: "73.079",
            name: "Faisalabad",
            description: "80"
          }
        ]


        setTimeout(() => {


          for (var v in res) {
            let mapclick = document.createElement('script');
            mapclick.type = 'text/javascript';
            mapclick.innerHTML =
              '$(simplemaps_countrymap_mapdata)[0].locations.push({  lat: ' +
              res[v].lat +
              ',lng: ' +
              res[v].lng +
              ',name: "' +
              res[v].name +
              '",description :' +
              res[v].description +
              '})';
            document.getElementsByTagName('head')[0].appendChild(mapclick);
          }
        }, 1000);

        setTimeout(() => {
          let mapclick2 = document.createElement('script');
          mapclick2.type = 'text/javascript';

          mapclick2.innerHTML = `$(simplemaps_countrymap.load())`;

          document.getElementsByTagName('head')[0].appendChild(mapclick2);

          //#region css map
          $('#map').css('width', '80%');
          $('#map_access').css('width', '80%');
          $('svg').css('width', '100%');
          $('#map_inner').find('svg').css('left', '20%');
          $('#map_access').css('display', 'block');

          //#endregion
        }, 2000);
  }
}
