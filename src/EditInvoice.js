import React, { useState } from "react";

function EditInvoice({ invoice, onClose }) {
  const [items, setItems] = useState([
    { name: "کابل HDMI", price: 150000, qty: 2 },
    { name: "ماوس بی‌سیم", price: 350000, qty: 1 },
    { name: "کیبورد", price: 700000, qty: 1 }
  ]);

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    if (field === "price" || field === "qty") {
      newItems[index][field] = Number(value);
    } else {
      newItems[index][field] = value;
    }
    setItems(newItems);
  };

  const handleSubmit = () => {
    alert("تغییرات ثبت شد!");
    onClose();
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = total * 0.12;
  const finalTotal = total + tax;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>ویرایش فاکتور {invoice.id}</h2>

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
                <td>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleChange(idx, "name", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => handleChange(idx, "price", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.qty}
                    onChange={(e) => handleChange(idx, "qty", e.target.value)}
                  />
                </td>
                <td>{(item.price * item.qty).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="totals">
          <p>جمع کل: {total.toLocaleString()} تومان</p>
          <p>جمع کل با ۱۲٪ مالیات: {finalTotal.toLocaleString()} تومان</p>
        </div>

        <button className="details-btn" onClick={handleSubmit}>
          ثبت
        </button>
        <button className="details-btn" onClick={onClose}>
          بستن
        </button>
      </div>
    </div>
  );
}

export default EditInvoice;