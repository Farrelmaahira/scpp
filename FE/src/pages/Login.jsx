import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";

function Login() {
  return (
    <>
      <div className="flex justify-center h-screen ">
        <div class="max-w-sm rounded overflow-hidden shadow-lg my-auto">
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2 text-center">Login</div>
            <form action="" method="post">
              <Label title="Username" name="username"></Label>
              <Input type="text" name="username" className="rounded w-full border p-1" ></Input>
              <Label title="Password" name="pass"></Label>
              <Input type="password" name="password" className="rounded w-full border p-1" ></Input>
              <Button type="submit" className="w-full rounded my-3 border p-2 bg-blue-500 text-white hover:bg-blue-900">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
