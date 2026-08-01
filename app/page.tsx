import PatientForm from "@/components/forms/PatientForm";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification | passKeyModal */}

      <section className="container my-auto remove-scrollbar">
        {/* <ThemeToggle/> */}
        <div className='sub-container max-w-124'>
          <Image
            src='/assets/icons/logo-full.svg'
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
            alt='logo'
            priority
          />

          <div>
            <PatientForm />
          </div>
          
          <div className="flex justify-between mt-20 text-14-regular">
            <p className="justify-items-end text-dark-600 xl:text-left">© 2026 Careplus</p>
            <Link href='/?admin=true' className="text-green-500">
              Admin
            </Link>
          </div>
        </div>

        <Button>Click Me</Button>
      </section>

      <Image
        src='/assets/images/onboarding-img.png'
        alt="patient"
        height={1000}
        width={1000}
        className="side-img max-w-[50%]"
        priority
      />
    </div>
  );
}
