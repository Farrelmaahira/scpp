import DashboardLayout from "../../layouts/DashboardLayout";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Card from "../../components/Card"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Order = () => {
  const [data, setData] = useState([])
  const [count, setCount] = useState()
  const url = import.meta.env.VITE_BASE_APP_URL
  const token = sessionStorage.getItem('token')

  const fetchAPI = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/orders`, {
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      setData(response.data.data)
      setCount(response.data.count)
    } catch (error) {
      throw error
    }
  }

  const handleDelete = async (id) => { try {
      const response = await axios.delete(`${url}/api/v1/order/${id}`, {
        headers : {
          Authorization : `Bearer ${token}`
        }
      })  
      if(response.status == 200) {
        fetchAPI()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])
  return (
    <>
      <DashboardLayout>
        <main className="min-h-screen">
          <div className="mx-auto w-3/8 my-5">
            <div className="flex justify-start my-3">
              <Card title="Order" className="mx-5">{count}</Card>
            </div>
            <div className="relative overflow-x-auto sm:rounded-lg">
              <Link to={'/create-order'}>
                <Button
                  type="button"
                  className="rounded-md border bg-blue-500 text-white p-3 my-2"
                >
                  Add new order
                </Button>
              </Link>
              <Table data={data} onDelete={handleDelete}/>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Order;
