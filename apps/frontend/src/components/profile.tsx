import { SessionUser } from "@/lib/session";
import {
  ArrowRightStartOnRectangleIcon,
  ListBulletIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type Props = {
  user: SessionUser;
};

const Profile = ({ user }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage
            src={user.avatar}
            className="rounded-full w-14 border-2 border-white"
          />
          <AvatarFallback>
            <UserIcon className="w-8 text-slate-500" />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex justify-center items-center gap-3">
          <UserIcon className="w-4" />
          <p>{user.name}</p>
        </div>
        <div className="*:grid *:grid-cols-5 *:gap-3 *:items-center *:my-2 *:py-2 [&>*>span]:col-span-4 [&>*:hover]:bg-sky-500 [&>*:hover]:text-white *:transition *:rounded-md [&>*>*:nth-child(1)]:justify-self-end">
          <a href="/api/auth/signout">
            <ArrowRightStartOnRectangleIcon className="w-4" />
            <span>Sign Out</span>
          </a>
          <Link href={"/user/create-post"}>
            <PencilSquareIcon className="w-4" />
            <span>Create New Post</span>
          </Link>
          <Link href={"/user/posts"}>
            <ListBulletIcon className="w-4" />
            <span>Posts</span>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
