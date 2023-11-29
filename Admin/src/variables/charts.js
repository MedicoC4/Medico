// variables/charts.js
import { fetchOrders } from "../redux/orderSlicer";

// ... other imports

// Assuming you have these variables defined
const orders = []; // Your array of orders
const dailyOrderDates = orders.map(order => order.createdAt);

// Line chart data and options
export const lineChartData = orders.map(order => ({
  name: `Order ${order.id}`,
  data: [order.total],
}));

export const lineChartOptions = {
  // ... your existing line chart options
  xaxis: {
    type: "datetime",
    categories: dailyOrderDates,
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  // ... other options
};

// Bar chart data and options
export const barChartData = orders.map(order => ({
  name: `Order ${order.id}`,
  data: [order.total],
}));

export const barChartOptions = {
  // ... your existing bar chart options
  xaxis: {
    categories: dailyOrderDates,
    labels: {
      style: {
        colors: "#A0AEC0",
        fontSize: "12px",
      },
    },
    show: true,
    axisBorder: {
      show: false,
    },
  },
  // ... other options
};
