//model
var places=[{
  title:'Zhilmil Dhaba',
  lat:29.738238,
  lng:76.974231,
  foursqid:'4b8b85b8f964a520c6a132e3',
  visibility:true
},
{
  title:'Daana Paani',
  lat:29.748523,
  lng:76.969548,
  foursqid:'531b40ef498ec2ca660be73d',
  visibility:true
},
{
  title:'Savoy Greens',
  lat:29.738030,
  lng:76.975786,
  foursqid:'4c4293baa48d9c74a6e80c40',
  visibility:true
},
{
  title:'Karnal Haveli',
  lat:29.651388,
  lng:76.986072,
  foursqid:'4daba9374159e8223e1373c7',
  visibility:true
},
{
  title:'Neelkanth Star',
  lat:29.649312,
  lng:76.985323,
  foursqid:'4e50a14c2271a1bdc3f05703',
  visibility:true
},
{
  title:'Royal Paradise',
  lat:29.731999,
  lng:76.976143,
  foursqid:'4f81519de4b0c0cb0447c70b',
  visibility:true
}];
//viewmodel
var loc=[];
var viewmodel=function()
{
  var defaultMarker = makeMarkerIcon('FE7569');
    var highlightedMarker = makeMarkerIcon('FFFF24');
    var InfoWindow = new google.maps.InfoWindow();

    function makeMarkerIcon(markerColor)
    {
        var markerImage = new google.maps.MarkerImage(
            'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
            '|40|_|%E2%80%A2',
            new google.maps.Size(21, 34),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34),
            new google.maps.Size(21, 34));
        return markerImage;
    }

    for(var i=0;i<places.length;i++)
    {
      var marker=new google.maps.Marker({
        position: {
        lat:places[i].lat,
        lng:places[i].lng
        },
        icon:defaultMarker,
        title:places[i].title,
        rating:0,
        id:places[i].foursqid,
        map:map,
        visibility:ko.observable(true)
      });

      loc.push(marker);
      marker.addListener('click',function(marker){
        openInfoWindow(this,InfoWindow);
        this.setAnimation(google.maps.Animation.DROP);
      });
      marker.addListener('mouseover', function() {
            this.setIcon(highlightedMarker);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultMarker);
        });
      }

        loc.forEach(function(marker){
          $.ajax({
            method:'GET',
            dataType:"json",
            url:"https://api.foursquare.com/v2/venues/" + marker.id + "?client_id=QO35LQQM5AT0C13XNIZNDFIMDMPKWYDCOBB1WSUEIELHXCTE&client_secret=2BNGA5PZY0AP4L01V53QZ14PZREHBCSX0AMSEF0NN5YQKWNM&v=20170507",
            success: function(data)
            {
              var id= data.response.venue;
              if(id.hasOwnProperty('rating'))
              {
                marker.rating=id.rating;
              }
              else
              {
                marker.rating=0;
              }
            },
            error: function(e)
            {
                alert('Cannot load data');
            }
          });
        });

        function openInfoWindow(marker,info)
        {
          if(info.marker!=marker)
          {
            info.marker=marker;
            info.setContent('<h4>'+marker.title+'</h4>'+'<h4>'+marker.rating+'</h4>');
              info.open(map, marker);
              info.addListener('closeclick', function()
              {
                info.marker = null;
            });
          }
        }

        this.openmarker=function(marker)
        {
          openInfoWindow(marker,InfoWindow);
          marker.setAnimation(google.maps.Animation.DROP);
        }

        this.input = ko.observable('');
    this.search = function() {
        var inputSearch = this.input();
            for (i = 0; i < loc.length; i++)
            {
              var filter=loc[i].title.toUpperCase();
                if (filter.indexOf(inputSearch.toUpperCase()) > -1)
                {
                    loc[i].visibility(true);
                    loc[i].setVisible(true);
                } else
                {
                    loc[i].visibility(false);
                    loc[i].setVisible(false);
                }
            }
    };
  };

      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
