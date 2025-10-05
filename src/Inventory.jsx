import React from 'react';
import { Table, Card, Typography, Tag } from 'antd';

const { Title } = Typography;

const Inventory = () => {
  // Generate 100 sample data entries
  const generateSampleData = () => {
    const customers = [
      'Xemex', 'Prabha', 'Mayur Sai', 'Sundaram Composite', 'HNTI', 'Senka',
      'TechCorp', 'Global Solutions', 'Innovation Hub', 'Digital Dynamics',
      'Future Systems', 'Smart Enterprises', 'Alpha Corp', 'Beta Industries',
      'Gamma Solutions', 'Delta Technologies', 'Epsilon Services', 'Zeta Corp',
      'Theta Industries', 'Lambda Systems', 'Sigma Solutions', 'Omega Corp',
      'Phoenix Enterprises', 'Titan Industries', 'Apex Solutions', 'Vertex Corp',
      'Nexus Systems', 'Quantum Solutions', 'Stellar Corp', 'Cosmic Industries',
      'Galaxy Systems', 'Universe Corp', 'Infinity Solutions', 'Eternal Industries',
      'Divine Corp', 'Celestial Systems', 'Mystic Solutions', 'Enigma Corp',
      'Cipher Industries', 'Code Systems', 'Logic Solutions', 'Algorithm Corp',
      'Data Industries', 'Info Systems', 'Knowledge Solutions', 'Wisdom Corp',
      'Intelligence Industries', 'Smart Systems', 'Clever Solutions', 'Brilliant Corp'
    ];
    
    const modes = ['Sale', 'Rental', 'Term Basis'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    
    const data = [];
    
    for (let i = 1; i <= 100; i++) {
      const mode = modes[Math.floor(Math.random() * modes.length)];
      const month = months[Math.floor(Math.random() * months.length)];
      const customer = customers[Math.floor(Math.random() * customers.length)];
      
      let purchaseQtyCoffee = 0;
      let purchaseQtyTea = 0;
      let coffeePrice = 0;
      let teaDustPrice = 0;
      let purchaseValueCoffee = 0;
      let purchaseValueTea = 0;
      let totalMonthlyPurchase = 0;
      let noOfDeliveries = 0;
      let noOfServiceVisit = 0;
      let kmTravelledDelivery = 0;
      let kmTravelledService = 0;
      let deliveryCharge = 0;
      let serviceVisitCharge = 0;
      let rawMaterialCost = 0;
      let deductions = 0;
      let rental = 0;
      let overallProfit = 0;
      
      if (mode === 'Rental') {
        rental = Math.floor(Math.random() * 3000) + 1000; // 1000-4000
        overallProfit = rental;
      } else {
        purchaseQtyCoffee = Math.floor(Math.random() * 100) + 10; // 10-110
        purchaseQtyTea = Math.floor(Math.random() * 50) + 5; // 5-55
        coffeePrice = Math.floor(Math.random() * 40) + 60; // 60-100
        teaDustPrice = Math.floor(Math.random() * 30) + 70; // 70-100
        
        purchaseValueCoffee = purchaseQtyCoffee * coffeePrice;
        purchaseValueTea = purchaseQtyTea * teaDustPrice;
        totalMonthlyPurchase = purchaseValueCoffee + purchaseValueTea;
        
        noOfDeliveries = Math.floor(Math.random() * 5) + 1; // 1-5
        noOfServiceVisit = Math.floor(Math.random() * 4); // 0-3
        kmTravelledDelivery = Math.floor(Math.random() * 100) + 10; // 10-110
        kmTravelledService = Math.floor(Math.random() * 50); // 0-50
        
        deliveryCharge = kmTravelledDelivery * 4.9; // ₹4.9 per km
        serviceVisitCharge = noOfServiceVisit * 37.1; // ₹37.1 per visit
        
        rawMaterialCost = totalMonthlyPurchase * 0.7; // 70% of purchase value
        deductions = Math.floor(Math.random() * 500); // 0-500
        
        overallProfit = totalMonthlyPurchase + deliveryCharge + serviceVisitCharge - rawMaterialCost - deductions;
      }
      
      data.push({
        key: i.toString(),
        customer,
        mode,
        month,
        purchaseQtyCoffee,
        purchaseQtyTea,
        coffeePrice,
        teaDustPrice,
        purchaseValueCoffee,
        purchaseValueTea,
        totalMonthlyPurchase,
        noOfDeliveries,
        noOfServiceVisit,
        kmTravelledDelivery,
        kmTravelledService,
        deliveryCharge: Math.round(deliveryCharge * 10) / 10,
        serviceVisitCharge: Math.round(serviceVisitCharge * 10) / 10,
        rawMaterialCost: Math.round(rawMaterialCost),
        deductions,
        rental,
        overallProfit: Math.round(overallProfit * 10) / 10
      });
    }
    
    return data;
  };

  const dataSource = generateSampleData();

  const columns = [
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      width: 120,
      fixed: 'left',
      render: (text) => <strong>{text}</strong>
    },
    {
      title: 'Mode',
      dataIndex: 'mode',
      key: 'mode',
      width: 100,
      render: (mode) => {
        const color = mode === 'Sale' ? 'green' : mode === 'Rental' ? 'blue' : 'orange';
        return <Tag color={color}>{mode}</Tag>;
      }
    },
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
      width: 80,
      render: (month) => <Tag color="purple">{month}</Tag>
    },
    {
      title: 'Purchase Qty - Coffee',
      dataIndex: 'purchaseQtyCoffee',
      key: 'purchaseQtyCoffee',
      width: 140,
      render: (value) => <span style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#495057' }}>{value}</span>
    },
    {
      title: 'Purchase Qty - Tea',
      dataIndex: 'purchaseQtyTea',
      key: 'purchaseQtyTea',
      width: 130,
      render: (value) => <span style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#495057' }}>{value}</span>
    },
    {
      title: 'Coffee Price',
      dataIndex: 'coffeePrice',
      key: 'coffeePrice',
      width: 100,
      render: (value) => `₹${value}`
    },
    {
      title: 'Tea Dust Price',
      dataIndex: 'teaDustPrice',
      key: 'teaDustPrice',
      width: 120,
      render: (value) => `₹${value}`
    },
    {
      title: 'Purchase Value Coffee',
      dataIndex: 'purchaseValueCoffee',
      key: 'purchaseValueCoffee',
      width: 150,
      render: (value) => `₹${value.toLocaleString()}`
    },
    {
      title: 'Purchase Value Tea',
      dataIndex: 'purchaseValueTea',
      key: 'purchaseValueTea',
      width: 140,
      render: (value) => `₹${value.toLocaleString()}`
    },
    {
      title: 'Total Monthly Purchase',
      dataIndex: 'totalMonthlyPurchase',
      key: 'totalMonthlyPurchase',
      width: 160,
      render: (value) => <strong style={{ color: '#495057' }}>₹{value.toLocaleString()}</strong>
    },
    {
      title: 'No of Deliveries',
      dataIndex: 'noOfDeliveries',
      key: 'noOfDeliveries',
      width: 120,
      render: (value) => <span style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#495057' }}>{value}</span>
    },
    {
      title: 'No of Service Visit',
      dataIndex: 'noOfServiceVisit',
      key: 'noOfServiceVisit',
      width: 140,
      render: (value) => <span style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#495057' }}>{value}</span>
    },
    {
      title: 'KM Travelled Delivery',
      dataIndex: 'kmTravelledDelivery',
      key: 'kmTravelledDelivery',
      width: 150,
      render: (value) => `${value} kms`
    },
    {
      title: 'KM Travelled Service',
      dataIndex: 'kmTravelledService',
      key: 'kmTravelledService',
      width: 150,
      render: (value) => `${value} kms`
    },
    {
      title: 'Delivery Charge',
      dataIndex: 'deliveryCharge',
      key: 'deliveryCharge',
      width: 120,
      render: (value) => `₹${value}`
    },
    {
      title: 'Service Visit Charge',
      dataIndex: 'serviceVisitCharge',
      key: 'serviceVisitCharge',
      width: 150,
      render: (value) => `₹${value}`
    },
    {
      title: 'Raw Material Cost',
      dataIndex: 'rawMaterialCost',
      key: 'rawMaterialCost',
      width: 140,
      render: (value) => `₹${value.toLocaleString()}`
    },
    {
      title: 'Deductions',
      dataIndex: 'deductions',
      key: 'deductions',
      width: 100,
      render: (value) => `₹${value}`
    },
    {
      title: 'Rental',
      dataIndex: 'rental',
      key: 'rental',
      width: 80,
      render: (value) => value > 0 ? `₹${value.toLocaleString()}` : '-'
    },
    {
      title: 'Overall Profit',
      dataIndex: 'overallProfit',
      key: 'overallProfit',
      width: 120,
      fixed: 'right',
      render: (value) => (
        <strong style={{ 
          color: value > 0 ? '#52c41a' : '#ff4d4f',
          backgroundColor: value > 0 ? '#f6ffed' : '#fff2f0',
          padding: '4px 8px',
          borderRadius: '6px',
          display: 'inline-block'
        }}>
          ₹{value.toLocaleString()}
        </strong>
      )
    }
  ];

  return (
  <div className="p-6 pb-24">
      <Title level={2} style={{ marginBottom: '24px', color: '#495057' }}>
        Financial & Operational Report
      </Title>
      
      <Card 
        style={{ 
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          border: '1px solid #f0f0f0'
        }}
        bodyStyle={{ padding: 0 }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 2000, y: 600 }}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
          }}
          style={{
            borderRadius: '12px',
            overflow: 'hidden'
          }}
          size="middle"
          bordered={false}
          className="custom-table"
        />
      </Card>
      
      <style jsx>{`
        .custom-table .ant-table-thead > tr > th {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          color: #495057;
          font-weight: 500;
          border: none;
          padding: 16px 12px;
          border-bottom: 2px solid #dee2e6;
        }
        
        .custom-table .ant-table-tbody > tr > td {
          border-bottom: 1px solid #f0f0f0;
          padding: 12px;
          color: #6c757d;
        }
        
        .custom-table .ant-table-tbody > tr:hover > td {
          background-color: #f8f9fa;
        }
        
        .custom-table .ant-table-tbody > tr:nth-child(even) > td {
          background-color: #fafbfc;
        }
        
        .custom-table .ant-table-tbody > tr:nth-child(even):hover > td {
          background-color: #f1f3f4;
        }
      `}</style>
  </div>
);
};

export default Inventory;


