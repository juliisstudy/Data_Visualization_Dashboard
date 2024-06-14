"use client";
import { PlayerField } from "@/app/lib/definition";
import { useFormState } from "react-dom";
import { createSubscribe } from "@/app/lib/action";

export default function Form({ players }: { players: PlayerField[] }) {
  const initialState = { message: "", error: {} };
  const [state, dispatch] = useFormState(createSubscribe, initialState);
  return <form action={dispatch}></form>;
}
