import Button from "./Button";
import Modal from "./Modal";
import { useEffect, useState } from "react";
const Table = (props) => {
  const { data } = props;
  const [ open, setOpen ] = useState(false) 
  const [list, setList] = useState([])
  const [selectedRow, setSelectedRow] = useState()
  const url = import.meta.env.VITE_BASE_APP_URL

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = (id) => {
    console.log(id)
  }

  useEffect(()=> {
    setList(data)
  }, [])
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Pelanggan
            </th>
            <th scope="col" className="px-6 py-3">
              Jenis Transaksi
            </th>
            <th scope="col" className="px-6 py-3">
              Jenis Penjualan
            </th>
            <th scope="col" className="px-6 py-3">
              Tanggal Order
            </th>
            <th scope="col" className="px-6 py-3">
              Pembayaran
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr className="odd:bg-white even:bg-gray-50" key={item.id}>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {item.mitra.nama_kios}
                </th>
                <td className="px-6 py-4">{item.jenis_transaksi}</td>
                <td className="px-6 py-4">{item.jenis_penjualan}</td>
                <td className="px-6 py-4">{item.tanggal_order}</td>
                <td className="px-6 py-4">{item.pembayaran}</td>
                <td className="px-6 py-4">
                  <Button className="rounded-md bg-red-500 text-white p-3" onClick={handleOpen}>Delete</Button>
                  <Modal open={open} close={handleClose}>
                    <div className="container flex flex-col">
                      <div className="p-3 text-xl text-black">
                        Apa anda yakin ingin menghapus data ini?
                      </div>
                      <div className="p-3 my-2">
                        <Button className="rounded-md bg-red-500 text-white p-3 mr-2" >
                          Delete
                        </Button>
                        <Button className="rounded-md bg-blue-500 text-white p-3" onClick={handleClose}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </Modal>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
