import React from 'react'

const Dashboard = ({ children }) => {
  return (
    <>
      <div className="dashHeader" />
      <div className="sideBar" />
      {children}
      <div className="dashFooter" />
    </>
  )
}

export default Dashboard
