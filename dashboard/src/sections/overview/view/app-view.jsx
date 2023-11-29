import axios from 'axios';
import { faker } from '@faker-js/faker';
import React, {useState, useEffect} from 'react';

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
  console.log(orderData)

  const orderQuantities = orderData.map((order) => order.quantityOrdered);
  console.log(orderQuantities)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:1128/api/orders/getPerMonth');
        setOrderData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function calculateOrderPerMonth(data) {
    const ordersPerMonth = data.reduce((acc, order) => {
      const monthYear = `${(new Date(order.createdAt).getMonth() + 1).toString().padStart(2, '0')}/
                        ${new Date(order.createdAt).getFullYear().toString().substring(2)}`;
      acc[monthYear] = (acc[monthYear] || 0) + order.quantityOrdered;
      return acc;
    }, {});
  
    // Get all months between the first and last date in the data
    const startDate = new Date(data[0]?.createdAt);
    const endDate = new Date(data[data.length - 1]?.createdAt);
    const months = [];
    const currentDate = startDate;
    while (currentDate <= endDate) {
      const monthYear = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/
                        ${currentDate.getFullYear().toString().substring(2)}`;
      months.push(monthYear);
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
  
    // Convert the ordersPerMonth object to an array
    const result = months.map((monthYear) => ({
      x: monthYear,
      y: ordersPerMonth[monthYear] || 0,
    }));
  
    return result;
  }
  
  console.log(calculateOrderPerMonth(orderData));
  const ordersPerMonth = calculateOrderPerMonth(orderData);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="New Users"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
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
                  data: ordersPerMonth.map((order) => order.y),
                }
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'America', value: 1 },
                { label: 'Asia', value:  2},
                { label: 'Europe', value:  3},
                { label: 'Africa', value:  4},
              ],
            }}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={7}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1500 },
              ],
            }}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={15}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>
{/* 
        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}
