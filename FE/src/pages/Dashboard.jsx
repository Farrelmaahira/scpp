import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <main className="bg-slate-200 min-h-screen">
          <div className="mx-auto border w-3/8 my-3 min-h-52 p-3">
            <div className="flex justify-around">
              <Card title="Order" content="0"></Card>
              <Card title="Order Detail" content="0"></Card>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
