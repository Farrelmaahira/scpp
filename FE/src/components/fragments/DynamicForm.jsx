import Input from "../Input";
import { useState, useEffect } from "react";
import Button from "../Button";

const DynamicForm = () => {
  const [items, setItems] = useState([
    {
      produk: "",
      tipe: "",
      gudang: "",
      jumlah_pesanan: "",
      kuantitas: "",
      harga: "",
      pajak: "",
      subtotal: "",
    },
  ]);

  useEffect(() => {
    let subtotal = document.getElementById("subtotal");
    subtotal.value = "50kg";
  }, []);

  const handleProduct = (fieldName, value, index) => {
    const fields = [...items];
    fields[index][fieldName] = value;
    setItems(fields);
  };

  const handleAddItem = () => {
    const values = [...items];
    values.push({
      produk: "",
      tipe: "",
      gudang: "",
      jumlah_pesanan: "",
      kuantitas: "",
      harga: "",
      pajak: "",
      subtotal: "",
    });
    setItems(values);
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
              <td>Pajak</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index} className="bg-grey-50">
                  <td>
                    <select
                      name="produk"
                      id=""
                      className="w-36"
                      onChange={(e) =>
                        handleProduct(e.target.name, e.target.value, index)
                      }
                    >
                      <option value=""></option>
                      <option value=" Beras Medium Vietnam 5% Logo SPGP 5kg PSO LN">
                        Beras Medium Vietnam 5% Logo SPGP 5kg PSO LN
                      </option>
                      <option value="Beras Medium Vietnam 5% Logo SPGP 50kg PSO LN">
                        Beras Medium Vietnam 5% Logo SPGP 50kg PSO LN
                      </option>
                    </select>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Produk Stok</option>
                    </select>
                  </td>
                  <td>
                    <select name="" id="" className="w-36">
                      <option value="">
                        Gudang Kanwil Maluku Malut, Kompleks Pergudangan
                        Nusaniwe
                      </option>
                      <option value="">
                        Gudang Kanwil Maluku Malut, Kompleks Pergudangan Tulehu
                      </option>
                      <option value="">
                        Gudang Kanwil Maluku Malut, Kompleks Pergudangan Halong
                      </option>
                    </select>
                  </td>
                  <td>
                    <Input
                      onChange={(e) => handleChange(e.target.value, index)}
                    />
                  </td>
                  <td>
                    <Input type="text" />
                  </td>
                  <td>
                    <Input type="text" />
                  </td>
                  <td>
                    <p>11%</p>
                  </td>
                  <td>
                    <input
                      type="text"
                      disabled
                      className="border bg-white"
                      id="subtotal"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Button
          className="border rounded-md bg-blue-500 p-2 text-white"
          onClick={handleAddItem}
        >
          Tambahkan Item
        </Button>
      </div>
    </>
  );
};

export default DynamicForm;
