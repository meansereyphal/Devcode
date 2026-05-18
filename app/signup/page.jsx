import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import Link from "next/link";
import signUp from "@/functions/signup";

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="main w-full flex flex-col items-center">
        <div className="header flex flex-col items-center gap-1">
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
            <p className="headline text-3xl font-bold">Join the community</p>
            <p className="sub text-[16px]">Ship code faster with reliable snippets.</p>
        </div>
        <form action={signUp} className="w-full max-w-100 p-4 gap-5 bg-mid border-border border rounded-lg mt-6 flex flex-col items-center">
            <p className="font-mono text-left w-full text-[12px] text-[--text-light] tracking-widest">USERNAME</p>
            <div className="w-full">
              <FaRegUser className="absolute ml-3 mt-1" />
              <input type="text" name="name" id="name" required className="relative -mt-5 w-full border border-border rounded-md pt-2 pb-2 pl-10" placeholder="dev_weizard" />
            </div>
            <p className="font-mono text-left w-full text-[12px] text-text-light tracking-widest">EMAIL ADDRESS</p>
            <div className="w-full">
              <MdOutlineEmail className="absolute ml-3 mt-1" />
              <input type="email" name="email" id="email" required className="-mt-5 w-full border border-border rounded-md pt-2 pb-2 pl-10" placeholder="name@company.com" />
            </div>
            <p className="font-mono text-left w-full text-[12px] text-text-light tracking-widest">PASSWORD</p>
            <div className="w-full">
              <MdLockOutline className="absolute ml-3 mt-1" />
              <input type="password" name="password" id="password" required className="-mt-5 w-full border border-border rounded-md pt-2 pb-2 pl-10" placeholder="••••••••" />
            </div>
            <p className="font-mono text-left w-full text-[12px] text-text-light tracking-widest">CONFIRM PASSWORD</p>
            <div className="w-full">
              <MdLockOutline className="absolute ml-3 mt-1" />
              <input type="password" name="confirmPassword" id="confirmPassword" required className="-mt-5 w-full border border-border rounded-md pt-2 pb-2 pl-10" placeholder="••••••••" />
            </div>
            <button className=" cursor-pointer bg-button text-[18px] font-bold text-button-text w-full h-10 rounded-md">Create Account</button>
        </form>
        <div className="footer">
          <div className="acc flex items-center justify-center mt-4 gap-1">
            <p className="text-[16px] text-text-light">Already have an account?</p>
            <Link href="/signin" className="text-[16px] text-link font-bold ml-1 hover:underline">
              Sign in instead
            </Link>
          </div>
          <div className="hover:underline flex items-center justify-center gap-4 mt-4">
            <Link href="/privacy" className="policy text-[11px] text-extra-light font-mono text-center">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="hover:underline policy text-[11px] text-extra-light font-mono text-center">
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}