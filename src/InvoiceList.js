import React from "react";

function InvoiceList(props) {
  const { invoices, selectedId, setSelectedId } = props;

  if (invoices.length === 0) {
    return <p style={{ color: "#00ffcc" }}>فاکتوری یافت نشد</p>;
  }

  return (
    <div className="invoice-list">
      {invoices.map((item) => (
        <label key={item.id} className="invoice-card">
          <input
            type="radio"
            name="invoice"
            checked={selectedId === item.id}
            onChange={() => setSelectedId(item.id)}
          />
          <div>
            <p>شماره فاکتور: {item.id}</p>
            <p>خریدار: {item.buyer}</p>
            <p>تاریخ: {item.date}</p>
          </div>
        </label>
      ))}
    </div>
  );
}

export default InvoiceList;