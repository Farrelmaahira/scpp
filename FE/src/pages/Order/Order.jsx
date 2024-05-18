import DashboardLayout from "../../layouts/DashboardLayout";
import Table from "../../components/Table";
import Button from "../../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
const Order = () => {
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
              <Table></Table>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Order;
