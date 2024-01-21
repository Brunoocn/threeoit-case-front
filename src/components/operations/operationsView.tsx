import { Loader2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useOperations } from "./hooks/operations.hook";
import { FormOperation } from "./formOperation";

export function OperationsView() {
  const { result } = useOperations();
  return (
    <>
      <p className="text-[24px] font-semibold text-blue-500">
        Operações Matematicas
      </p>

      <Accordion
        type="single"
        collapsible
        className="mb-[50px] mt-[26px] w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Como funciona</AccordionTrigger>
          <AccordionContent>
            Nesta pagina você podera executar operações matematicas, e ver o
            resultado delas.
          </AccordionContent>
        </AccordionItem>

        <div className="mt-[20px]">
          <FormOperation />
          <p className="mt-[20px]">resultado: {result}</p>
        </div>
      </Accordion>
    </>
  );
}
