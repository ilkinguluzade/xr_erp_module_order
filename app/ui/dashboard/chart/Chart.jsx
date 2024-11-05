"use client"
import React from 'react'
import styles from './chart.module.css'
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Yan',
    rejected: 4000,
    pending: 2390,
    done: 2400,
    order: 2400,
  },
  {
    name: 'Fev',
    rejected: 3000,
    pending: 2390,
    done: 1398,
    order: 2210,
  },
  {
    name: 'Mar',
    rejected: 2000,
    pending: 2390,
    done: 9800,
    order: 2290,
  },
  {
    name: 'Apr',
    rejected: 2780,
    pending: 2390,
    done: 3908,
    order: 2000,
  },
  {
    name: 'May',
    rejected: 1890,
    pending: 2390,
    done: 4800,
    order: 2181,
  },
  {
    name: 'Iyn',
    rejected: 2390,
    pending: 2390,
    done: 3800,
    order: 2500,
  },
  {
    name: 'Iyl',
    rejected: 3490,
    pending: 2390,
    done: 4300,
    order: 2100,
  },
  {
    name: 'Avq',
    rejected: 2000,
    pending: 2390,
    done: 9800,
    order: 2290,
  },
  {
    name: 'Sen',
    rejected: 2780,
    pending: 2390,
    done: 3908,
    order: 2000,
  },
  {
    name: 'Okt',
    rejected: 1890,
    pending: 2390,
    done: 4800,
    order: 2181,
  },
  {
    name: 'Noy',
    rejected: 2390,
    pending: 2390,
    done: 3800,
    order: 2500,
  },
  {
    name: 'Dek',
    rejected: 3490,
    pending: 2390,
    done: 4300,
    order: 2100,
  },
];


const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Aylıq sifariş qrafiki</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="rejected" stackId="1" stroke="#f7737375" fill="#f7737375" />
          <Area type="monotone" dataKey="done" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="pending" stackId="1" stroke="#73d8f775" fill="#73d8f775" />
          <Area type="monotone" dataKey="order" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
