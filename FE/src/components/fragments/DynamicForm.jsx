import Input from "../Input";
import { useState, useEffect } from "react";
import Button from "../Button";
import { Trash } from "react-feather";

const DynamicForm = (props) => {
  const { setOrderItems } = props;

  const [items, setItems] = useState([
    {
      produk: "",
      tipe: "Produk Stok",
      gudang: "",
      jumlah_pesanan: "",
      kuantitas: "",
      harga: "",
      subtotal: "",
    },
  ]);

  useEffect(() => {
    setOrderItems(items);
  }, [items]);

  const updateItems = (index, key, value) => {
    const kuantitas = document.getElementById(`kuantitas-${index}`);
    const subtotalElement = document.getElementById(`subtotal-${index}`);
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index][key] = value;

      // Update kuantitas and subtotal based on the new values
      if (key === "produk") {
        if (value === "1") {
          let finalValue = "5kg";
          newItems[index]["kuantitas"] = finalValue;
          newItems[index]["produk"] =
            "Beras Medium Vietnam 5% Logo SPGP 5kg PSO LN";
          kuantitas.value = finalValue;
        } else if (value === "2") {
          let finalValue = "50kg";
          newItems[index]["kuantitas"] = finalValue;
          newItems[index]["produk"] =
            "Beras Medium Vietnam 5% Logo SPGP 50kg PSO LN";
          kuantitas.value = finalValue;
        }
      } else if (key === "jumlah_pesanan" || key === "harga") {
        const jumlahPesanan = newItems[index]["jumlah_pesanan"] || 0;
        const harga = newItems[index]["harga"] || 0;
        const subtotal = jumlahPesanan * harga;
        newItems[index]["subtotal"] = subtotal;
        subtotalElement.value = subtotal.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        });
      }
      return newItems;
    });
  };

  const handleAddItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        produk: "",
        tipe: "",
        gudang: "",
        jumlah_pesanan: "",
        kuantitas: "",
        harga: "",
        subtotal: "",
      },
    ]);
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-auto overflow-scroll w-full text-sm text-left rtl:text-right text-gray-500 mx-auto">
          <thead className="text-grey-700 uppercase bg-gray-50">
            <tr>
              <td>Produk</td>
              <td>Tipe</td>
              <td>Gudang</td>
              <td>Jumlah Pesanan</td>
              <td>Kuantitas / Kuantum</td>
              <td>Harga Satuan</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="bg-grey-50">
                <td>
                  <select
                    name="produk"
                    className="w-36"
                    onChange={(e) =>
                      updateItems(index, "produk", e.target.value)
                    }
                    value={item.produk}
                    required
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="1">
                      Beras Medium Vietnam 5% Logo SPGP 5kg PSO LN
                    </option>
                    <option value="2">
                      Beras Medium Vietnam 5% Logo SPGP 50kg PSO LN
                    </option>
                  </select>
                </td>
                <td>
                  <select
                    name="tipe"
                    className="w-36"
                    onChange={(e) => updateItems(index, "tipe", e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="">Produk Stok</option>
                  </select>
                </td>
                <td>
                  <select
                    name="gudang"
                    className="w-36"
                    onChange={(e) =>
                      updateItems(index, "gudang", e.target.value)
                    }
                    value={item.gudang}
                    required
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Gudang Kanwil Maluku Malut, Kompleks Pergudangan Nusaniwe">
                      Gudang Kanwil Maluku Malut, Kompleks Pergudangan Nusaniwe
                    </option>
                    <option value="Gudang Kanwil Maluku Malut, Kompleks Pergudangan Tulehu">
                      Gudang Kanwil Maluku Malut, Kompleks Pergudangan Tulehu
                    </option>
                    <option value="Gudang Kanwil Maluku Malut, Kompleks Pergudangan Halong">
                      Gudang Kanwil Maluku Malut, Kompleks Pergudangan Halong
                    </option>
                  </select>
                </td>
                <td>
                  <Input
                    type="number"
                    onChange={(e) =>
                      updateItems(index, "jumlah_pesanan", e.target.value)
                    }
                    value={item.jumlah_pesanan}
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    value={item.kuantitas}
                    id={`kuantitas-${index}`}
                    readOnly={true}
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    onChange={(e) =>
                      updateItems(index, "harga", e.target.value)
                    }
                    value={item.harga}
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    className="border bg-white"
                    id={`subtotal-${index}`}
                    readOnly={true}
                  />
                </td>
                <td>
                  <Button type="button" onClick={handleDeleteItem}>
                    <Trash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <a onClick={handleAddItem} className="cursor-pointer">
          Tambah Produk
        </a>
        <Button
          type="submit"
          className="border rounded-md p-2 bg-blue-500 text-white mx-2"
        >
          Simpan Order
        </Button>
      </div>
    </>
  );
};

export default DynamicForm;
