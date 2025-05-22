export enum VehicleType {
  CAR = 'Car',
  TRUCK = 'Truck',
  BUS = 'Bus',
  MOTORCYCLE = 'Motorcycle',
  CAMPER = 'Camper Van',
  TRAILER = 'Trailer'
}
  
export enum FuelType {
  DIESEL = 'Diesel',
  PETROL = 'Petrol',
  ELECTRIC = 'Electric',
  HYBRID = 'Hybrid',
  LPG = 'LPG'
}
  
export interface MaintenanceRecord {
  id?: string;
  date?: Date;
  description?: string;
  cost?: number;
  performedBy?: string;
  nextMaintenanceDate?: Date;
}
  
export interface InsuranceDetails {
  provider?: string;
  policyNumber?: string;
  startDate?: Date;
  expirationDate?: Date;
  coverageType?: string;
  premium?: boolean;
}
  
export interface TechnicalInspection {
  inspectionDate: Date;
  expirationDate: Date;
  result: 'PASSED' | 'FAILED';
  inspectionNumber: string;
}
  
export interface Vehicle {
  // Podstawowe informacje
  id: number;
  make: string;
  model: string;
  type: VehicleType;
  
  // Identyfikatory
  vin?: string;
  registrationNumber?: string;

  // Szczegóły techniczne
  productionYear: number;
  mileage?: number;
  fuelType: FuelType;
  engineCapacity?: number; // w cm3
  power?: number; // w KM

  // Status i lokalizacja
  currentLocation?: string;
  
  // Daty i terminy
  purchaseDate?: Date;
  lastServiceDate?: Date;
  lastServiceDescription?: string;
  
  // Dokumenty i ubezpieczenie
  insurance?: InsuranceDetails;
  technicalInspection?: TechnicalInspection;
  
  // Historia przeglądów
  maintenanceHistory?: MaintenanceRecord[];
  
  // Dodatkowe informacje
  notes?: string;
  
  // Koszty
  purchasePrice?: number;
  currentValue?: number;
  
  // Dodatkowe informacje
  color?: string;
  seatingCapacity?: number;
  loadCapacity?: number; // w kg

  // Metadane
  createdAt: Date;
  updatedAt: Date;
}