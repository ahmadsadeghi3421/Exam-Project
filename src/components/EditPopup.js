import { useState } from "react";

function EditPopup({ invoice, invoices, setInvoices, close }) {
  const [items, setItems] = useState(invoice.items);

  const update = (index, field, value) => {
    const copy = [...items];
    copy[index][field] = value;
    setItems(copy);
  };

  const save = () => {
    setInvoices(
      invoices.map(inv =>
        inv.id === invoice.id
          ? { ...inv, items }
          : inv
      )
    );
    close();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>ویرایش کالاها</h3>

        {items.map((it, i) => (
          <div key={i} className="row">
            <input
              value={it.name}
              onChange={e =>
                update(i, "name", e.target.value)
              }
            />
            <input
              type="number"
              value={it.price}
              onChange={e =>
                update(i, "price", +e.target.value)
              }
            />
            <input
              type="number"
              value={it.qty}
              onChange={e =>
                update(i, "qty", +e.target.value)
              }
            />
            <span>{it.price * it.qty}</span>
          </div>
        ))}

        <button onClick={save}>ثبت</button>
        <button onClick={close}>بستن</button>
      </div>
    </div>
  );
}

export default EditPopup;