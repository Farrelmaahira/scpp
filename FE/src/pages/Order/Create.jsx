import Input from "../../components/Input";
import DashboardLayout from "../../layouts/DashboardLayout";
import Label from "../../components/Label";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
const Create = () => {
  const [mitra, setMitra] = useState([]);
  const [values, setValues] = useState({
    mitra_id: "",
    jenis_transaksi: "PSO",
    jenis_penjualan: "KPSH-BM",
    tanggal_order: "",
    cara_pembayaran: "",
    rekening_tujuan: "",
    detail_order: {
      produk: "",
      tipe: "Produk Stok",
      gudang: "",
      jumlah_pesanan: 0,
      kuantitas: 0,
      harga: 0,
      subtotal: 0,
    },
  });
  const url = import.meta.env.VITE_BASE_APP_URL;
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const IDR = new Intl.NumberFormat('id-ID', {
    style : 'currency',
    currency : 'IDR'
  })

  const fetchMitra = async () => {
    const data = await axios.get(`${url}/api/v1/mitra`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMitra(data.data);
  };

  useEffect(() => {
    fetchMitra();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const data = await axios.post(`${url}/api/v1/order`, values, {
      headers : {
        Authorization : `Bearer ${token}`
      }
    });
    console.log(data)
    if (data.status == 200) {
      return navigate("/dashboard");
    }
  };

  return (
    <DashboardLayout>
      <main className="min-h-screen">
        <div className="mx-auto w-3/8 my-5">
          <div className="flex flex-col">
            <div className="w-full border shadow-md min-h-16 p-4 bg-white">
              <h2 className="text-xl">
                Order Penjualan
                <span className="text-blue-400"> / Baru</span>
              </h2>
            </div>
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="w-full my-2 border shadow-md p-4 bg-white">
                <h1 className="header text-3xl text-blue-400">Baru</h1>
                <div className="form-box mt-5 w-full ">
                  <div className="">
                    <ul className="w-full">
                      <li className=" flex flex-row justify-around my-2">
                        <Label className="p-2" name="pelanggan">
                          Pelanggan
                        </Label>
                        <select
                          name="mitra"
                          id=""
                          defaultValue={"select"}
                          className="border rounded-sm p-1 w-3/4"
                          onChange={(e) => {
                            setValues({
                              ...values,
                              mitra_id: e.target.value,
                            });
                          }}
                        >
                          <option value="select" selected disabled>
                            Select
                          </option>
                          {mitra?.map((item, index) => {
                            return (
                              <option
                                value={item.id}
                                key={index}
                                className="uppercase"
                              >
                                {item.id} - {item.nama_kios}
                              </option>
                            );
                          })}
                        </select>
                      </li>
                      <li className=" flex flex-row justify-around my-2">
                        <Label className=" p-2" name="jenis_transaksi">
                          Jenis Transaksi
                        </Label>
                        <select
                          name="jenis_transaksi"
                          id="jenis_transaksi"
                          className="rounded-sm p-1 w-3/4 border"
                          onChange={(e) => {
                            setValues({
                              ...values,
                              jenis_transaksi: e.target.value,
                            });
                          }}
                          required
                          defaultValue={"select"}
                        >
                          <option value="select" disabled selected>
                            Select
                          </option>
                          <option value="PSO">PSO</option>
                        </select>
                      </li>
                      <li className=" flex flex-row justify-around my-2">
                        <Label className="p-2" name="jenis_penjualan">
                          Jenis Penjualan
                        </Label>
                        <select
                          name="jenis_penjualan"
                          id="jenis_penjualan"
                          className="rounded-sm border w-3/4"
                          required
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value="KPSH - BM">KPSH - BM</option>
                        </select>
                      </li>
                      <li className=" flex flex-row justify-around my-2">
                        <Label className=" p-2">Tanggal Order</Label>
                        <input
                          type="date"
                          className="border rounded-sm p-1 w-3/4"
                          placeholder="John Doe"
                          onChange={(e) => {
                            setValues({
                              ...values,
                              tanggal_order: e.target.value,
                            });
                          }}
                        />
                      </li>
                      <li className=" flex flex-row justify-around my-2">
                        <Label className=" p-2" name="cara_pembayaran">
                          Cara Pembayaran
                        </Label>
                        <select
                          name="cara_pembayaran"
                          id="cara_pembayaran"
                          className="border rounded-sm p-1 w-3/4"
                          onChange={(e) => {
                            setValues({
                              ...values,
                              cara_pembayaran: e.target.value,
                            });
                          }}
                          required
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value="Transfer">Transfer</option>
                        </select>
                      </li>
                      <li className=" flex flex-row justify-around my-2">
                        <Label className=" p-2">Rekening Tujuan</Label>
                        <select
                          name="rekening"
                          className="border rounded-sm p-1 w-3/4"
                          onChange={(e) => {
                            setValues({
                              ...values,
                              rekening_tujuan: e.target.value,
                            });
                          }}
                          required
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value="1427318545">
                            BNI HP - 1427318545
                          </option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* FORM */}
              <div className="overflow-x-auto">
                <table className="table-auto overflow-scroll w-full text-sm text-left rtl:text-right text-gray-500 mx-auto">
                  <thead className="text-grey-700 uppercase bg-gray-50">
                    <tr>
                      <td>Produk</td>
                      <td>Tipe</td>
                      <td>Gudang</td>
                      <td>Jumlah Pesanan</td>
                      <td>Kuantitas / Kuantum (kg)</td>
                      <td>Harga Satuan</td>
                      <td>Subtotal</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-grey-50">
                      <td>
                        <select
                          name="produk"
                          className="w-36"
                          value={values.detail_order.produk}
                          onChange={(e) => {
                            let qty = 0;
                            if (e.target.value == 1) {
                              qty = 5;
                            } else if (e.target.value == 2) {
                              qty = 50;
                            }
                            setValues({
                              ...values,
                              detail_order: {
                                ...values.detail_order,
                                produk: e.target.value,
                                kuantitas: qty,
                              },
                            });
                          }}
                          required
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value={1}>
                            Beras Medium Vietnam 5% Logo SPGP 5kg PSO LN
                          </option>
                          <option value={2}>
                            Beras Medium Vietnam 5% Logo SPGP 50kg PSO LN
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          name="tipe"
                          className="w-36"
                          required
                          value={values.detail_order.tipe}
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
                          value={values.detail_order.gudang}
                          onChange={(e) => {
                            setValues({
                              ...values,
                              detail_order: {
                                ...values.detail_order,
                                gudang: e.target.value,
                              },
                            });
                          }}
                          required
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="Gudang Kanwil Maluku Malut, Kompleks Pergudangan Nusaniwe">
                            Gudang Kanwil Maluku Malut, Kompleks Pergudangan
                            Nusaniwe
                          </option>
                          <option value="Gudang Kanwil Maluku Malut, Kompleks Pergudangan Tulehu">
                            Gudang Kanwil Maluku Malut, Kompleks Pergudangan
                            Tulehu
                          </option>
                          <option value="Gudang Kanwil Maluku Malut, Kompleks Pergudangan Halong">
                            Gudang Kanwil Maluku Malut, Kompleks Pergudangan
                            Halong
                          </option>
                        </select>
                      </td>
                      <td>
                        <Input
                          type="number"
                          value={values.detail_order.jumlah_pesanan}
                          onChange={(e) => {
                            const newValue = +e.target.value;
                            if (newValue != 0 || e.target.value == "") {
                              setValues({
                                ...values,
                                detail_order: {
                                  ...values.detail_order,
                                  jumlah_pesanan: newValue,
                                  subtotal: newValue * values.detail_order.harga,
                                },
                              });
                            }
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="bg-white"
                          value={values.detail_order.kuantitas}
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={values.detail_order.harga}
                          onChange={(e) => {
                            setValues({
                              ...values,
                              detail_order: {
                                ...values.detail_order,
                                harga: e.target.value,
                                subtotal:
                                  e.target.value *
                                  values.detail_order.jumlah_pesanan,
                              },
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="border bg-white"
                          value={IDR.format(values.detail_order.subtotal)}
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Button
                  type="submit"
                  className="border rounded-md p-2 bg-blue-500 text-white my-3"
                >
                  Simpan Order
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Create;
