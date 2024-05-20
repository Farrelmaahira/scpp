import Input from "../../components/Input";
import DashboardLayout from "../../layouts/DashboardLayout";
import Label from "../../components/Label";
import DynamicForm from "../../components/fragments/DynamicForm";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [itemDetail, setItemDetail] = useState([]);
  const [kios, setKios] = useState('');
  const [transaksi, setTransaksi] = useState('PSO');
  const [penjualan, setPenjualan] = useState('KPSH-BM');
  const [tanggal, setTanggal] = useState('');
  const [pembayaran, setPembayaran] = useState('');
  const [rekening, setRekening] = useState(0);
  const url = import.meta.env.VITE_BASE_APP_URL
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      mitra_id : kios,
      jenis_transaksi : transaksi,
      jenis_penjualan : penjualan,
      tanggal_order : tanggal,
      cara_pembayaran : pembayaran,
      rekening_tujuan : rekening,
      detail_order : itemDetail
    }
    const data = await axios.post(`${url}/api/order`,payload );
    if(data.data.status == 'success') {
      return navigate('/order')
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
                        <Input
                          type="text"
                          className="border rounded-sm p-1 w-3/4"
                          placeholder="John Doe"
                          id="pelanggan"
                          onChange={e => {setKios(e.target.value)} }
                        />
                      </li>
                      <li className=" flex flex-row justify-around my-2">
                        <Label className=" p-2" name="jenis_transaksi">
                          Jenis Transaksi
                        </Label>
                        <select
                          name="jenis_transaksi"
                          id="jenis_transaksi"
                          className="rounded-sm p-1 w-3/4 border"
                          onChange={e => {setTransaksi(e.target.value)}}
                        >
                          <option value="" disabled selected>Select</option>
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
                        >
                          <option value="" disabled selected>Select</option>
                          <option value="KPSH - BM">KPSH - BM</option>
                        </select>
                      </li>
                      <li className=" flex flex-row justify-around my-2">
                        <Label className=" p-2">Tanggal Order</Label>
                        <Input
                          type="date"
                          className="border rounded-sm p-1 w-3/4"
                          placeholder="John Doe"
                          onChange={e => {setTanggal(e.target.value)} }
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
                          onChange={e => {setPembayaran(e.target.value)}}
                        >
                          <option value=""  disabled selected>Select</option>
                          <option value="Transfer">Transfer</option>
                        </select>
                      </li>
                      <li className=" flex flex-row justify-around my-2">
                        <Label className=" p-2">Rekening Tujuan</Label>
                        <select
                          name="rekening"
                          className="border rounded-sm p-1 w-3/4"
                          onChange={e => {setRekening(e.target.value)}}
                        >
                          <option value="" disabled selected>Select</option>
                          <option value="1427318545">
                            BNI HP - 1427318545
                          </option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  {/* <Button type="submit">Tambah Item</Button> */}
                </div>
              </div>
              <DynamicForm setOrderItems={setItemDetail} />
            </form>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Create;
