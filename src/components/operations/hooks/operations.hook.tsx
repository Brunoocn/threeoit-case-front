"use client";
import { createContext, useContext, useState } from "react";

import { fetchWrapper } from "@/utils/fetchWrapper";
import {
  IOperationsDataContextData,
  IOperationsDataProviderProps,
} from "./dto/operations.dto";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const OperationsContext = createContext<IOperationsDataContextData>(
  {} as IOperationsDataContextData
);

export function OperationsDataProvider(props: IOperationsDataProviderProps) {
  const [result, setResult] = useState<null | number>(null);

  const formSchema = z.object({
    number1: z.string().transform((v) => Number(v) || 0),
    number2: z.string().transform((v) => Number(v) || 0),
    operation: z.string(),
  });

  type IformSchema = z.infer<typeof formSchema>;

  const formProps = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { isSubmitting } = formProps.formState;

  const handleCalculate = async (data: IformSchema) => {
    const result: number = await fetchWrapper("calculations/calculate", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    setResult(result);
  };
  return (
    <OperationsContext.Provider
      value={{
        formProps,
        handleCalculate: formProps.handleSubmit(handleCalculate),
        isSubmitting,
        result,
      }}
    >
      {props.children}
    </OperationsContext.Provider>
  );
}

export function useOperations() {
  const context = useContext(OperationsContext);

  return context;
}
