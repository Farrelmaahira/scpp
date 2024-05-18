import Label from "../Label";
import Input from "../Input";
import Button from "../Button";

const LoginForm = (props) => {
  const { onSubmit, setUname, setPass } = props;

  return (
    <form action="" method="post" onSubmit={onSubmit}>
      <Label title="Username" name="username">
        Username
      </Label>
      <Input
        type="text"
        name="username"
        className="rounded w-full border p-1"
        placeholder="John Doe"
        onChange={(e) => {
          setUname(e.target.value);
        }}
      ></Input>
      <Label title="Password" name="pass">
        Password
      </Label>
      <Input
        type="password"
        name="password"
        className="rounded w-full border p-1"
        placeholder="****"
        onChange={(e) => setPass(e.target.value)}
      ></Input>
      <Button
        type="submit"
        className="w-full rounded my-3 border p-2 bg-blue-500 text-white hover:bg-blue-900"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
