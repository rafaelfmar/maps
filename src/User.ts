import faker from "faker";

import { MarkerData } from "./CustomMap";

export class User implements MarkerData {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h2>User name: ${this.name}</h2>
      </div>
    `;
  }
}
