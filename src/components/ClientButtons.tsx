"use client";

import { useRouter } from "next/navigation";

export default function ClientButtons() {
  const router = useRouter();

  return (
    <div className={"flex flex-row mt-7 justify-center"}>
      <button
        onClick={() => { router.push("/work"); }}
        className={"primary-button"}
      >
        Previous Work
      </button>

      <div className={"ml-2 mr-2"} />

      <button
        onClick={() => { router.push("/work"); }}
        className={"secondary-button"}
      >
        Get in Touch
      </button>
    </div>
  );
} 