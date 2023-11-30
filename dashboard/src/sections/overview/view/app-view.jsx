import axios from 'axios';
import { faker } from '@faker-js/faker';
import React, { useState, useEffect, useCallback } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppNewsUpdate from '../app-news-update';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
// import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  const [orderData, setOrderData] = useState([]);
  const [reviews, setReviews] = useState({});
  const [totalOrders, setTotalOrders] = useState();
  const [totalUser, setTotalUsers] = useState()
  const [totalProd, setTotalProd] = useState()
  const [dailyOrder, setDailyOrder] = useState(0)
  const [acceptedOrder, setAcceptedOrder] = useState([]);
  const [pendingOrder, setPendingOrder] = useState([]);
  const [rejectedOrder, setRejectedOrder] = useState([]);
  console.log(totalUser);

  const orderQuantities = orderData.map((order) => order?.quantityOrdered);
  console.log(orderQuantities);

  console.log(faker);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:1128/api/orders/getPerMonth');
        setOrderData(response?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const pharmacyId = JSON.parse(localStorage.getItem('userData'));
  console.log(pharmacyId?.data?.id);

  const fetchReviews = useCallback(async () => {
    const review = await axios.get(
      `http://127.0.0.1:1128/api/reviews/getAllPh/${pharmacyId?.data?.id}`
    );
    setReviews(review?.data);
  }, [pharmacyId?.data?.id]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const totalOrder = useCallback(async () => {
    const total = await axios.get(`http://127.0.0.1:1128/api/orders/totalOrder`);
    setTotalOrders(total?.data?.totalAmount);
  }, []);

  useEffect(() => {
    totalOrder();
  }, [totalOrder]);

  const totalUsers = useCallback(async () => {
    try {
      const total = await axios.get(`http://127.0.0.1:1128/api/orders/getAll/${pharmacyId?.data?.email}`);
      setTotalUsers(total?.data);
      
      // Filter the data here and set it to a new state variable
      const acceptedOrders = total?.data?.filter((order) => order?.orderStatus === "Accepted") || [];
      const pendingOrders = total?.data?.filter((order) => order?.orderStatus === "Pending") || [];
      const rejectedOrders = total?.data?.filter((order) => order?.orderStatus === "Rejected") || [];
  
      // Set the filtered data to state
      setAcceptedOrder(acceptedOrders);
      setPendingOrder(pendingOrders);
      setRejectedOrder(rejectedOrders);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [pharmacyId?.data?.email]);
  
  useEffect(() => {
    totalUsers();
  }, [totalUsers]);

  const totalProducts = useCallback(async () => {
    const total = await axios.get(`http://127.0.0.1:1128/api/product/phProduct/${pharmacyId?.data?.email}`);
    setTotalProd(total?.data);
  }, [pharmacyId?.data?.email]);

  useEffect(() => {
    totalProducts();
  }, [totalProducts]);

  const dailyOrders = useCallback(async () => {
    const total = await axios.get(`http://127.0.0.1:1128/api/orders/dailyTotalOrder/${pharmacyId?.data?.email}`);
    setDailyOrder(total?.data?.dailyOrderCount);
  }, [pharmacyId?.data?.email]);

  useEffect(() => {
    dailyOrders();
  }, [dailyOrders]);

  // const acceptedOrder = totalUser?.filter((order) => order?.orderStatus === "Accepted") || []
  // const pendingOrder = totalUser?.filter((order) => order?.orderStatus === "Pending") || []
  // const rejectedOrder = totalUser?.filter((order) => order?.orderStatus === "Rejected") || []

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Sales"
            total={totalOrders}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Users"
            total={totalUser?.length}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Products"
            total={totalProd?.length}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Daily Orders"
            total={dailyOrder}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Orders Per Month"
            subheader="(+43%) than last year"
            chart={{
              // labels: ordersPerMonth.map((order) => order.x),
              labels: [
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
                '12/01/2023',
              ],
              series: [
                {
                  name: 'Order per month',
                  type: 'column',
                  fill: 'solid',
                  data: [1,1,1,1,1,1,1,1,1,1],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Orders Statistics"
            chart={{
              series: [
                { label: 'Accepted', value: acceptedOrder?.length },
                { label: 'Rejected', value: rejectedOrder?.length },
                { label: 'Pending', value: pendingOrder?.length },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={15}>
          <AppNewsUpdate
            title="Reviews"
            list={
              reviews?.Reviews?.map((review) => ({
                id: review?.id,
                title: review?.User?.username,
                description: review?.review,
                image: review?.User?.imgUrl,
                postedAt: review?.createdAt,
              })) || []
            }
          />
        </Grid>
      
      </Grid>
    </Container>
  );
}
