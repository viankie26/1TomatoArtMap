export interface Location {
  id: string;
  label: string;
  city: string;
  country: string;
  countryCode?: string;
  continent?: string;
  preserveDisplayNames?: boolean;
  preserveLocationLabel?: boolean;
  lat: number;
  lon: number;
}

export interface SearchResult extends Location {}
