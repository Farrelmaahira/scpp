import Input from "../../components/Input";
import DashboardLayout from "../../layouts/DashboardLayout";
import Label from "../../components/Label";
import DynamicForm from "../../components/fragments/DynamicForm";
const Create = () => {
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
            <div className="w-full my-2 border shadow-md p-4 bg-white">
              <h1 className="header text-3xl text-blue-400">Baru</h1>
              <div className="form-box mt-5 w-full ">
                <form action="" method="post">
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
                        >
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
                          <option value="KPSH - BM">KPSH - BM</option>
                        </select>
                      </li>
                      <li className=" flex flex-row justify-around my-2">
                        <Label className=" p-2">Tanggal Order</Label>
                        <Input
                          type="date"
                          className="border rounded-sm p-1 w-3/4"
                          placeholder="John Doe"
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
                        >
                          <option value="Transfer">Transfer</option>
                        </select>
                      </li>
                      <li className=" flex flex-row justify-around my-2">
                        <Label className=" p-2">Rekening Tujuan</Label>
                        <select
                          name=" "
                          id=""
                          className="border rounded-sm p-1 w-3/4"
                        >
                          <option value=" BNI HP - 1427318545">
                            {" "}
                            BNI HP - 1427318545
                          </option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
            <DynamicForm />
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Create;
