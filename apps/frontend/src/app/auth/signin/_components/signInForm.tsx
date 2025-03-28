import SubmitButton from "@/components/submitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {};

const SignInForm = (props: Props) => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <Label htmlFor="email" className="mb-2">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="example@gmail.com"
          type="email"
          //   defaultValue={state?.data?.email}
        />
      </div>
      <div>
        <Label htmlFor="password" className="mb-2">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          //   defaultValue={state?.data?.password}
        />
      </div>
      <SubmitButton>Sign In</SubmitButton>
    </form>
  );
};

export default SignInForm;
