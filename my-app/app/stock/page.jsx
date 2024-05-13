'use client'
import React, { useState, useEffect } from 'react';

export default function Stock() {
  const [stock, setStock] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://kkstockback-3.onrender.com/stock');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStock(data.stock);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <h2 className="text-xl font-bold mb-4">Stock:</h2>
  {stock ? (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Stock Name</th>
          <th className="px-4 py-2">Stock Quantity</th>
        </tr>
      </thead>
      <tbody>
        {stock.map((s) => (
          <tr key={s.stockId}>
            <td className="border px-4 py-2">{s.stockName}</td>
            <td className="border px-4 py-2">{s.stockQuantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No stock</p>
  )}
</div>

  );
}



