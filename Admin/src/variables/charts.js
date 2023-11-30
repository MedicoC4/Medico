import { fetchOrders } from "../redux/orderSlicer";


const orders = []; 
const dailyOrderDates = orders.map(order => order.createdAt);


export const lineChartData = orders.map(order => ({
  name: `Order ${order.id}`,
  data: [order.total],
}));

export const lineChartOptions = {
  
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
  
};


export const barChartData = orders.map(order => ({
  name: `Order ${order.id}`,
  data: [order.total],
}));

export const barChartOptions = {
  
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

};
