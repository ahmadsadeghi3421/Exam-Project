import React, { useState } from "react";
import EditInvoice from "./EditInvoice";

function InvoiceDetails({ invoice, onBack }) {
  const [showEdit, setShowEdit] = useState(false);

  const items = [
    { name: "کابل HDMI", price: 150000, qty: 2 },
    { name: "ماوس بی‌سیم", price: 350000, qty: 1 },
    { name: "کیبورد", price: 700000, qty: 1 }
  ];

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = total * 0.12;
  const finalTotal = total + tax;

  return (
    <div className="details-page">
      <h2>جزئیات فاکتور</h2>

      <h3>شماره فاکتور: {invoice.id}</h3>

      <ul className="info-list">
        <li>شماره فاکتور: {invoice.id}</li>
        <li>خریدار: {invoice.buyer}</li>
        <li>تلفن: {invoice.phone}</li>
        <li>فروشنده: {invoice.seller}</li>
        <li>تاریخ فاکتور: {invoice.date}</li>
      </ul>

      <h3>لیست کالاها</h3>

      <table className="items-table">
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>فی</th>
            <th>تعداد</th>
            <th>مجموع</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.price.toLocaleString()}</td>
              <td>{item.qty}</td>
              <td>{(item.price * item.qty).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totals">
        <p>جمع کل: {total.toLocaleString()} تومان</p>
        <p>جمع کل با ۱۲٪ مالیات: {finalTotal.toLocaleString()} تومان</p>
      </div>

      <button className="details-btn" onClick={() => setShowEdit(true)}>
        ویرایش فاکتور
      </button>
      <button className="details-btn" onClick={onBack}>
        بازگشت
      </button>

      {showEdit && <EditInvoice invoice={invoice} onClose={() => setShowEdit(false)} />}
    </div>
  );
}

export default InvoiceDetails;