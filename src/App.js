import React, { useState } from "react";
import SearchBar from "./SearchBar";
import InvoiceList from "./InvoiceList";
import InvoiceDetails from "./InvoiceDetails";
import AddInvoice from "./AddInvoice";
import invoicesData from "./Data";
import "./style.css";

function App() {
  const [invoices, setInvoices] = useState(invoicesData);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  // فیلتر فاکتورها بر اساس شماره فاکتور
  const filteredInvoices = invoices.filter((item) =>
    item.id.toString().includes(search)
  );

  const selectedInvoice = invoices.find((item) => item.id === selectedId);

  // اضافه کردن فاکتور جدید به لیست
  const handleAddInvoice = (newInvoice) => {
    setInvoices([...invoices, { ...newInvoice, id: Number(newInvoice.id) }]);
  };

  // اگر در حالت نمایش جزئیات هستیم
  if (showDetails && selectedInvoice) {
    return (
      <InvoiceDetails
        invoice={selectedInvoice}
        onBack={() => setShowDetails(false)}
      />
    );
  }

  return (
    <div className="app">
      <h1>🧪 سیستم مدیریت فاکتور</h1>

      {/* نوار جستجو فقط ورودی */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* دکمه افزودن فاکتور Pop-up */}
      <button className="details-btn" onClick={() => setShowAdd(true)}>
        ➕ افزودن فاکتور جدید
      </button>

      {/* لیست فاکتورها */}
      <InvoiceList
        invoices={filteredInvoices}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />

      {/* دکمه مشاهده جزئیات */}
      <button
        className="details-btn"
        disabled={!selectedId}
        onClick={() => setShowDetails(true)}
      >
        مشاهده جزئیات فاکتور
      </button>

      {/* Pop-up افزودن فاکتور */}
      {showAdd && (
        <AddInvoice
          onAdd={handleAddInvoice}
          onClose={() => setShowAdd(false)}
        />
      )}
    </div>
  );
}

export default App;