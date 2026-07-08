import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Order } from "../types/order";
import { formatPrice } from "../utils/formatPrice";

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const getStatusColor = () => {
    switch (order.status) {
      case "out_for_delivery":
        return "#16a34a";
      case "delivered":
        return "#475569";
      case "cancelled":
        return "#dc2626";
      default:
        return "#000";
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.orderId}>{order.id}</Text>

      <Text style={styles.title}>{order.sku.name}</Text>

      <Text style={[styles.status, { color: getStatusColor() }]}>
        {order.status.replace(/_/g, " ")}
      </Text>

      <Text style={styles.address}>{order.address}</Text>

      <Text style={styles.price}>
        {formatPrice(order.amountPaise)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 3,
  },

  orderId: {
    fontSize: 12,
    color: "#64748b",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 4,
  },

  status: {
    marginTop: 4,
    fontWeight: "600",
    textTransform: "capitalize",
  },

  address: {
    marginTop: 8,
    color: "#475569",
  },

  price: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});