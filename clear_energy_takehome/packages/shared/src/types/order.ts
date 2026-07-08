export interface SKU {
  code: string;
  name: string;
  qty: number;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  address: string;
  amountPaise: number;
  sku: SKU;
  status: string;
  placedAt: string;
  eta: string | null;
}

export interface Trip {
  seq: number;
  orderId: string;
  driverId: string;
  customerName: string;
  sku: string;
  address: string;
  distanceKm: number;
  status: string;
  etaMin: number | null;
}

export interface PendingAction {
  id: string;
  adminId: string;
  category: string;
  summary: string;
  priority: string;
  ageMinutes: number;
  slaMinutes: number;
  action: string;
}