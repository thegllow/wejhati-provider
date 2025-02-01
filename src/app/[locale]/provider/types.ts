export type BookingData = {
    id:string,
    bookingNo: string;      // Booking number
    busNo: string;          // Bus number
    noOfSeats: number;      // Total number of seats
    noOfPassengers: number; // Number of passengers
    tripType: "One way" | "Round"; // Trip type
    departure: string;      // Departure location
    arrival: string;        // Arrival location
    date: string;           // Date of the trip
    tripTime: string;       // Trip time
    bookingValue: string;   // Booking value with currency
  };
  