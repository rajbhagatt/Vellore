	
	function style_pc(feature) {
	
	return {
	    fillColor: 'white',
		weight: 3,
        opacity: 0.6,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.1
		};
	
	}
	
	
	
	//Do classification based on the merged data
	
	var zoom=10;
	
	
	
	latstart=12.83;
	longstart=78.826;	
	
	var map = L.map('map').setView([latstart, longstart], zoom);
	PC=L.geoJson(Vellore_PCBound, {style: style_pc}).addTo(map);
	
	function dispmap(){
	
	
	
	
	
	drawmap();
	
	}
	
	
	function drawmap(){
	
	//Title for the map
	
		//Initial view
	  
	L.tileLayer(OSM_URL, {attribution: OSM_ATTRIB,id: 'examples.map-20v6611k', opacity:0.7}).addTo(map);
	
	/*
	Google Maps
<input type="checkbox" id="googlecheck">
<br>
	if (document.getElementById('googlecheck').checked)
	{
	var googleLayer = new L.Google('ROADMAP');
    map.addLayer(googleLayer);
	}
	*/
	
	/*
	for (i=0; i<POList.length; i++)
	      L.piechartMarker(
          L.latLng([POList_JS[i]["Latitude"], POList_JS[i]["Longitude"]]),
          {
			  radius:15,
              data: [
                  { name: 'Group A', value: POList_JS[i]["Group_A"], style: { fillStyle: 'rgba(255,0,0,.6)', strokeStyle: 'rgba(255,0,0,.95)'}},
                  { name: 'Group B', value: POList_JS[i]["Group_B"], style: { fillStyle: 'rgba(0,80,0,.6)', strokeStyle: 'rgba(255,0,0,.95)'} },
                  { name: 'Group C', value: POList_JS[i]["Group_C"], style: { fillStyle: 'rgba(244, 196, 48,.6)', strokeStyle: 'rgba(255,0,0,.95)'} },
                  
              ]
          ,
	
	onEachFeature: function (feature, layer) {
				layer.bindPopup("<table  style='width:500px;height:100%;font-size:12px'><tr><td><b>Name:</b> "+feature.properties.Name +"<br><br><b>Team:</b> "+feature.properties.Team+"<br><br><b>Languages:</b> "+feature.properties.Language+"<br><br><b>Bio: </b>"+feature.properties.AY+"</td><td ><img src=data/Pics/"+String(feature.properties.SlNo)+'.jpg  style="width:200px;height:250px;"></td></tr></table>', {
				maxWidth : 600
				}
				);
			}}
      ).addTo(map);
	
	*/
    
    geojson=L.geoJson(POList, { 
	
	pointToLayer: function (feature, latlng) {
        return (L.piechartMarker(
          latlng,
          {
			  radius:15,
              data: [
                  { name: 'Group A', value: feature.properties["Group_A"], style: { fillStyle: 'rgba(255,0,0,1)', strokeStyle: 'rgba(255,0,0,.95)'}},
                  { name: 'Group B', value: feature.properties["Group_B"], style: { fillStyle: 'rgba(0,80,0,1)', strokeStyle: 'rgba(255,0,0,.95)'} },
                  { name: 'Group C', value: feature.properties["Group_C"], style: { fillStyle: 'rgba(244, 196, 48,1)', strokeStyle: 'rgba(255,0,0,.95)'} },
                  
              ]
          }
      ));
    },
	
	onEachFeature: function (feature, layer) {
				layer.bindPopup(' Name: <b>' + feature.properties['Office'] + '</b><br />Pin Code: <b>'+ feature.properties['Pincode']+ '</b><br />Group A: <b>'+ feature.properties['Group_A']+ '</b><br />Group B: <b>'+ feature.properties['Group_B']+ '</b><br />Group C: <b>'+ feature.properties['Group_C']+ '</b><br />Total Surveyed: <b>'+ feature.properties['Total'], {
				maxWidth : 600
				}
				);
			}}).addTo(map);
	
    }
	
	
	dispmap()
	
	info = L.control({position: "topright"});

	info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'hover'); // create a div with a class "info"
    this.update();
    return this._div;
	};

	// method that we will use to update the control based on feature properties passed
	info.update = function (props) { 	
    this._div.innerHTML =  (props ? +' Name: <b>' + props['Office'] + '</b><br />Pin Code: <b>'+ props['Pincode']+ '</b><br />Group A: <b>'+ props['Group_A']+ '</b><br />Group B: <b>'+ props['Group_B']+ '</b><br />Group C: <b>'+ props['Group_C']
        : '');
	};
    
	info.addTo(map);
    
	
	
	function onEachFeature(feature,layer) {
	//Within the map for every feature showing labels
	
	
	//What to do when user hovers over
    layer.on({
		
        mouseover: highlightFeature,
        mouseout: resetHighlight
		
    });
	
	}

	function highlightFeature(e) {
	//When the users hover over the polygons, they are highlighted
    /*var layer = e.target;
    layer.setStyle({weight: 5,color: '#666',dashArray: '',fillOpacity: 0.7});
	*/
	info.update(layer.feature.properties);
	}

	function resetHighlight(e) {
	//When the users hover out of the polygon,the highlight is removed
		/*geojson.resetStyle(e.target);*/
		info.update();
	}

	/*
	map = L.map('map').setView([latstart, longstart], zoom);
	
	
	function getColor(d) {
	//for the colours inside the map area
	return d > classgrades[4] ? colourset[4] :
		   d > classgrades[3]   ? colourset[3] :
           d > classgrades[2]  ? colourset[2] :
           d > classgrades[1]   ? colourset[1] :
		   d > -100000 ? colourset[0]:
		   'grey';
	}
	
	function style(feature) {
	
	return {
	    fillColor: getColor(feature.properties[parameter]),
		weight: 2,
        opacity: 0.4,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
		};
	
	}
	
	
	

*/