interface Coordinates {
  location: {
    latitude: number;
    longitude: number;
  };
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

  addMarker(resource: Coordinates): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: resource.location.latitude,
        lng: resource.location.longitude,
      },
    });
  }
}
