import DashboardLayout from "../../layouts/DashboardLayout";
import Table from "../../components/Table";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Order = () => {
  const [data, setData] = useState([])
  const [err, setErr] = useState('')
  const [id, setId] = useState()
  const url = import.meta.env.VITE_BASE_APP_URL

  const fetchAPI = async () => {
    try {
      const response = await axios.get(`${url}/api/orders`)
      return response
    } catch (error) {
      throw error
    }
  }
  useEffect(() => {
    fetchAPI().then(res => {
      setData(res.data.data)
    }).catch(err => {
      setErr(err)
    })
  }, [])
  return (
    <>
      <DashboardLayout>
        <main className="min-h-screen">
          <div className="mx-auto w-3/8 my-5">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <Link to={'/create-order'}>
                <Button
                  type="button"
                  className="rounded-md border bg-blue-500 text-white p-3 my-2"
                >
                  Add new order
                </Button>
              </Link>
              <Table data={data}/>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Order;
