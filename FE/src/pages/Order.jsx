import DashboardLayout from "../layouts/DashboardLayout";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Label from "../components/Label";
import Input from "../components/Input";
import { useState } from "react";
const Order = () => {
  const [showModal, setShowModal] = useState(false);

  const buttonToggle = () => {
    setShowModal(true);
  };

  return (
    <>
      <DashboardLayout>
        <main className="bg-slate-200 min-h-screen">
          <div className="mx-auto w-3/8 my-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Button
                type="button"
                className="rounded-md border bg-blue-500 text-white p-3 my-2"
                onClick={() => buttonToggle()}
              >
                Add new order
              </Button>
              <Modal.Modal
                active={showModal}
                unactivate={() => setShowModal(false)}
                title="Add order"
              >
                <form action="" method="post" className="">
                  <Label title="Username" name="username"></Label>
                  <Input
                    type="text"
                    name="username"
                    className="rounded w-full border p-1"
                  ></Input>
                  <Label title="Password" name="pass"></Label>
                  <Input
                    type="password"
                    name="password"
                    className="rounded w-full border p-1"
                  ></Input>
                  <Modal.Footer>
                    <div className="flex flex-row my-3">
                      <Button
                        type="submit"
                        className="bg-blue-500 text-white p-3 rounded w-36"
                        onClick={() => console.log('new order')}
                      >
                        Save
                      </Button>
                    </div>
                  </Modal.Footer>
                </form>
              </Modal.Modal>
              <Table></Table>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Order;
