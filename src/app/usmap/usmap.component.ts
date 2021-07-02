import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-usmap',
  templateUrl: './usmap.component.html',
  styleUrls: ['./usmap.component.scss']
})
export class UsmapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
    this.map();
  }

  map(){
    let node = document.createElement('script');
    node.src = './assets/usmap.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

    let node1 = document.createElement('script');
    node1.src = './assets/mapdataus.js';
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

        let res = [{
              name: "New York City",
              lat: 40.7143528,
              lng: -74.0059731,
              description: "20"
            }, {
              name: "Anchorage",
              lat: 61.2180556,
              lng: -149.9002778,
              description: "39"
            }
        ]


        setTimeout(() => {


          for (var v in res) {
            let mapclick = document.createElement('script');
            mapclick.type = 'text/javascript';
            mapclick.innerHTML =
              '$(simplemaps_usmap_mapdata)[0].locations.push({  lat: ' +
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

          mapclick2.innerHTML = `$(simplemaps_usmap.load())`;

          document.getElementsByTagName('head')[0].appendChild(mapclick2);

        }, 2000);
  }

}
