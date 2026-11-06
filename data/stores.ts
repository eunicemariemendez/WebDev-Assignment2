export type Store = {
  id: string;
  name: string;
  address: string;
  distance: number;
  hours: string;
  onlineOrdering: boolean;
  driveThru: boolean;
  previous: boolean;
};

export const STORES: Store[] = [
  {
    id: "1",
    name: "Sobeys McKenzie Town",
    address: "20 McKenzie Towne Ave SE, Calgary",
    distance: 0.3,
    hours: "Open 7:00 AM–8:00 PM",
    onlineOrdering: false,
    driveThru: false,
    previous: false,
  },
  {
    id: "2",
    name: "52St & McIvor Blvd SE",
    address: "15566 McIvor Boulevard Copperfield Corner 500, Calgary",
    distance: 0.9,
    hours: "Open 4:30 AM–9:30 PM",
    onlineOrdering: true,
    driveThru: true,
    previous: true,
  },
  {
    id: "3",
    name: "Safeway 130th Ave SE",
    address: "8989 130 Ave SE, Calgary",
    distance: 1.2,
    hours: "Open 7:00 AM–8:00 PM",
    onlineOrdering: false,
    driveThru: false,
    previous: false,
  },
  {
    id: "4",
    name: "130th Ave & 52 St SE",
    address: "5005 130 Ave SE, Calgary",
    distance: 1.5,
    hours: "Open 5:00 AM–10:00 PM",
    onlineOrdering: true,
    driveThru: true,
    previous: true,
  },
];
