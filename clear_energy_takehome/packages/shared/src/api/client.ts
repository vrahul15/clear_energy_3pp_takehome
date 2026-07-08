import axios from "axios";
import { Order, Trip, PendingAction } from "../types/order";

const api = axios.create({
 baseURL: "http://192.168.0.101:4000", // Android Emulator
  // If using Expo Go on a real phone, replace with your PC IP:
  // http://192.168.x.x:4000
  timeout: 10000,
});

export const getOrders = async (
  customerId: string
): Promise<Order[]> => {
  const response = await api.get("/orders", {
    params: { customerId },
  });

  return response.data;
};

export const getTrips = async (
  driverId: string
): Promise<Trip[]> => {
  const response = await api.get("/trips", {
    params: { driverId },
  });

  return response.data;
};

export const getPendingActions = async (
  adminId: string
): Promise<PendingAction[]> => {
  const response = await api.get("/pending-actions", {
    params: { adminId },
  });

  return response.data;
};