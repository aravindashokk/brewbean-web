import React from 'react';
import { Table, Card, Typography, Tag } from 'antd';

const { Title } = Typography;

const Inventory = () => {
  // Data structure based on the financial table from the image
  const dataSource = [
    {
      key: '1',
      customer: 'Xemex',
      mode: 'Term Basis',
      month: 'August',
      purchaseQtyCoffee: 70,
      purchaseQtyTea: 20,
      coffeePrice: 98,
      teaDustPrice: 87.5,
      purchaseValueCoffee: 6860,
      purchaseValueTea: 1960,
      totalMonthlyPurchase: 8820,
      noOfDeliveries: 1,
      noOfServiceVisit: 3,
      kmTravelledDelivery: 42,
      kmTravelledService: 10,
      deliveryCharge: 205.8,
      serviceVisitCharge: 111.3,
      rawMaterialCost: 5831,
      deductions: 411.6,
      rental: 0,
      overallProfit: 617.4
    },
    {
      key: '2',
      customer: 'Prabha',
      mode: 'Sale',
      month: 'August',
      purchaseQtyCoffee: 40,
      purchaseQtyTea: 25,
      coffeePrice: 78,
      teaDustPrice: 87,
      purchaseValueCoffee: 3120,
      purchaseValueTea: 2175,
      totalMonthlyPurchase: 5295,
      noOfDeliveries: 1,
      noOfServiceVisit: 0,
      kmTravelledDelivery: 2,
      kmTravelledService: 0,
      deliveryCharge: 52,
      serviceVisitCharge: 0,
      rawMaterialCost: 3710,
      deductions: 0,
      rental: 0,
      overallProfit: 1532
    },
    {
      key: '3',
      customer: 'Mayur Sai',
      mode: 'Sale',
      month: 'August',
      purchaseQtyCoffee: 15,
      purchaseQtyTea: 30,
      coffeePrice: 78,
      teaDustPrice: 87,
      purchaseValueCoffee: 1170,
      purchaseValueTea: 2610,
      totalMonthlyPurchase: 3780,
      noOfDeliveries: 1,
      noOfServiceVisit: 0,
      kmTravelledDelivery: 52,
      kmTravelledService: 0,
      deliveryCharge: 52,
      serviceVisitCharge: 0,
      rawMaterialCost: 2646,
      deductions: 0,
      rental: 0,
      overallProfit: 1084
    },
    {
      key: '4',
      customer: 'Sundaram Composite',
      mode: 'Rental',
      month: 'August',
      purchaseQtyCoffee: 0,
      purchaseQtyTea: 0,
      coffeePrice: 0,
      teaDustPrice: 0,
      purchaseValueCoffee: 0,
      purchaseValueTea: 0,
      totalMonthlyPurchase: 0,
      noOfDeliveries: 0,
      noOfServiceVisit: 0,
      kmTravelledDelivery: 0,
      kmTravelledService: 0,
      deliveryCharge: 0,
      serviceVisitCharge: 0,
      rawMaterialCost: 0,
      deductions: 0,
      rental: 1500,
      overallProfit: 1500
    },
    {
      key: '5',
      customer: 'HNTI',
      mode: 'Rental',
      month: 'September',
      purchaseQtyCoffee: 0,
      purchaseQtyTea: 0,
      coffeePrice: 0,
      teaDustPrice: 0,
      purchaseValueCoffee: 0,
      purchaseValueTea: 0,
      totalMonthlyPurchase: 0,
      noOfDeliveries: 0,
      noOfServiceVisit: 0,
      kmTravelledDelivery: 0,
      kmTravelledService: 0,
      deliveryCharge: 0,
      serviceVisitCharge: 0,
      rawMaterialCost: 0,
      deductions: 0,
      rental: 2000,
      overallProfit: 2000
    },
    {
      key: '6',
      customer: 'Senka',
      mode: 'Sale',
      month: 'September',
      purchaseQtyCoffee: 25,
      purchaseQtyTea: 15,
      coffeePrice: 78,
      teaDustPrice: 87,
      purchaseValueCoffee: 1950,
      purchaseValueTea: 1305,
      totalMonthlyPurchase: 3255,
      noOfDeliveries: 1,
      noOfServiceVisit: 0,
      kmTravelledDelivery: 15,
      kmTravelledService: 0,
      deliveryCharge: 15,
      serviceVisitCharge: 0,
      rawMaterialCost: 2278.5,
      deductions: 0,
      rental: 0,
      overallProfit: 961.5
    }
  ];

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
      render: (value) => <span style={{ backgroundColor: '#fff3cd', padding: '2px 6px', borderRadius: '4px' }}>{value}</span>
    },
    {
      title: 'Purchase Qty - Tea',
      dataIndex: 'purchaseQtyTea',
      key: 'purchaseQtyTea',
      width: 130,
      render: (value) => <span style={{ backgroundColor: '#fff3cd', padding: '2px 6px', borderRadius: '4px' }}>{value}</span>
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
      render: (value) => <strong style={{ color: '#1890ff' }}>₹{value.toLocaleString()}</strong>
    },
    {
      title: 'No of Deliveries',
      dataIndex: 'noOfDeliveries',
      key: 'noOfDeliveries',
      width: 120,
      render: (value) => <span style={{ backgroundColor: '#fff3cd', padding: '2px 6px', borderRadius: '4px' }}>{value}</span>
    },
    {
      title: 'No of Service Visit',
      dataIndex: 'noOfServiceVisit',
      key: 'noOfServiceVisit',
      width: 140,
      render: (value) => <span style={{ backgroundColor: '#fff3cd', padding: '2px 6px', borderRadius: '4px' }}>{value}</span>
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
  <div className="p-6">
      <Title level={2} style={{ marginBottom: '24px', color: '#1890ff' }}>
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
          border: none;
          padding: 16px 12px;
        }
        
        .custom-table .ant-table-tbody > tr > td {
          border-bottom: 1px solid #f0f0f0;
          padding: 12px;
        }
        
        .custom-table .ant-table-tbody > tr:hover > td {
          background-color: #f5f7fa;
        }
        
        .custom-table .ant-table-tbody > tr:nth-child(even) > td {
          background-color: #fafafa;
        }
        
        .custom-table .ant-table-tbody > tr:nth-child(even):hover > td {
          background-color: #f0f2f5;
        }
      `}</style>
  </div>
);
};

export default Inventory;


