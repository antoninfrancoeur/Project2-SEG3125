import Header from "../components/Header";
import { pageShop, linkToShop } from "../data";
import { crystalBallsItems, crystalFilters } from "../shop_data";
import { ShopAdvert1 } from '../page-components/Adverts';
import Footer from "../components/Footer";
import ShopHeader from "../page-components/ShopHeader";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, Legend, ResponsiveContainer } from 'recharts';
import {salesOverTimeData, auraComposition} from '../sales_analytics';


const title = "The Enchanted \nEmporium";


const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

function ShopAnalytics() {

  return (
    <>
      <Header nav_items={pageShop} title={title} />
      <div className="shop">
        <div className="analytics-center-page">
          <h1 className="report-title">Shop Analytics</h1>
          <div>
          <p>Welcome to the analytics sections. This part of the website was patched in very late, and is fairly unfinished designed wise.</p>
          <p>I do not have the time to look into the library I decided to use for the visuals, nor do I care for this assignement.</p>
          </div>
          <span className="analytics-label">Sales</span>
          <LineChart width={720} height={300} data={salesOverTimeData}>
            <XAxis dataKey="name" fontSize={15}/>
            <YAxis fontSize={15}/>
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
          <span className="analytics-label">Sales Composition By Aura</span>
          <AreaChart
              width={500}
              height={400}
              data={auraComposition}
              stackOffset="expand"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" fontSize={15}/>
              <YAxis tickFormatter={toPercent} fontSize={15}/>
              <Tooltip content={renderTooltipContent} />
              <Area type="monotone" dataKey="chill" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="ominous" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="spooky" stackId="1" stroke="#ffc658" fill="#ffc658" />
              <Area type="monotone" dataKey="warm" stackId="1" stroke="#d5600a" fill="#ffa563" />
              <Area type="monotone" dataKey="freaky" stackId="1" stroke="#bb1414" fill="#dd4444" />
            </AreaChart>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShopAnalytics;