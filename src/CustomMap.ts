interface MarkerData {
  location: {
    latitude: number;
    longitude: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(resource: MarkerData): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: resource.location.latitude,
        lng: resource.location.longitude,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: resource.markerContent(),
    });

    marker.addListener("click", () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
