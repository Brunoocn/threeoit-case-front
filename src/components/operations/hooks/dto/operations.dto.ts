import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

export interface IOperationsDataContextData {
  formProps: UseFormReturn<
    {
      number1: number;
      number2: number;
      operation: string;
    },
    any,
    undefined
  >;
  handleCalculate: () => Promise<void>;
  isSubmitting: boolean;
  result: number | null;
}

export interface IOperationsDataProviderProps {
  children: ReactNode;
}
