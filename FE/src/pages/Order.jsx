import DashboardLayout from "../layouts/DashboardLayout";
import Table from "../components/Table";
const Order = () => {
  return (
    <>
      <DashboardLayout>
        <main className="bg-slate-200 min-h-screen">
          <div className="mx-auto w-3/8 bg-blue-200 my-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <Table></Table>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Order;
