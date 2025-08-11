export type RootStackParamList = {
  Login: undefined;
  Intro: undefined;
  Register: undefined;
  Drawer: undefined;
  Forgot: undefined;
  CarDetails: { car: HomeCarCardDetails };
  BookCar: { car: HomeCarCardDetails };
  RentalPartner: { id: number; };
  CancelBooking: { id: number; };
};

export type RootDrawerParamList = {
  HomeTabs: undefined;
  Profile: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type HomeCarCardDetails = {
  id: string;
  name: string;
  image: string;
  price: number;
  type: 'automatic' | 'manual' | 'semi';
  fuel_type: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  number_of_seats: number;
  ratings: number;
};


export type ReviewDetails = {
  name: string;
  rating: number;
  comment: string;
  image?: string;
};