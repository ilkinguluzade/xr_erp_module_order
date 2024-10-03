"use client"
import React from 'react'
import styles from './chart.module.css'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Avqust',
    Ümumi: 590,
    Tamamlanmış: 800,
    Ləğv: 1400,
    Gözləmədə: 490,
  },
  {
    name: 'Sentyabr',
    Ümumi: 1000,
    Tamamlanmış: 967,
    Ləğv: 1506,
    Gözləmədə: 590,
  },
 
];


const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Aylıq sifariş qrafiki</h2>
      <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}} />
          <Legend />
          <Area type="monotone" dataKey="Ümumi" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="Tamamlanmış" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Ləğv" stroke="#ff7300" />
          <Scatter dataKey="Gözləmədə" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
