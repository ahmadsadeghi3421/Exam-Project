import React, { useState } from "react";

function AddInvoice({ onAdd, onClose }) {
  const [invoice, setInvoice] = useState({
    id: "",
    buyer: "",
    phone: "",
    seller: "",
    date: ""
  });

  const [items, setItems] = useState([
    { name: "", price: 0, qty: 1 }
  ]);

  const handleInvoiceChange = (field, value) => {
    setInvoice({ ...invoice, [field]: value });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    if (field === "price" || field === "qty") {
      newItems[index][field] = Number(value);
    } else {
      newItems[index][field] = value;
    }
    setItems(newItems);
  };

  const addItemRow = () => {
    setItems([...items, { name: "", price: 0, qty: 1 }]);
  };

  const handleSubmit = () => {
    const newInvoice = { ...invoice, items };
    onAdd(newInvoice);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>افزودن فاکتور جدید</h2>

        <div className="form-group">
          <input
            type="number"
            placeholder="شماره فاکتور"
            value={invoice.id}
            onChange={(e) => handleInvoiceChange("id", e.target.value)}
          />
          <input
            type="text"
            placeholder="خریدار"
            value={invoice.buyer}
            onChange={(e) => handleInvoiceChange("buyer", e.target.value)}
          />
          <input
            type="text"
            placeholder="تلفن"
            value={invoice.phone}
            onChange={(e) => handleInvoiceChange("phone", e.target.value)}
          />
          <input
            type="text"
            placeholder="فروشنده"
            value={invoice.seller}
            onChange={(e) => handleInvoiceChange("seller", e.target.value)}
          />
          <input
            type="date"
            value={invoice.date}
            onChange={(e) => handleInvoiceChange("date", e.target.value)}
          />
        </div>

        <h3>لیست کالاها</h3>
        <table className="items-table">
          <thead>
            <tr>
              <th>نام کالا</th>
              <th>فی</th>
              <th>تعداد</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleItemChange(idx, "name", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => handleItemChange(idx, "price", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.qty}
                    onChange={(e) => handleItemChange(idx, "qty", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="details-btn" onClick={addItemRow}>
          افزودن کالا
        </button>
        <button className="details-btn" onClick={handleSubmit}>
          ثبت فاکتور
        </button>
        <button className="details-btn" onClick={onClose}>
          بستن
        </button>
      </div>
    </div>
  );
}

export default AddInvoice;