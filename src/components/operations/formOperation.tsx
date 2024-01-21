import { Loader2 } from "lucide-react";
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

export function FormOperation() {
  const { formProps, handleCalculate, isSubmitting } = useOperations();

  const operations = [
    {
      label: "+",
      value: "sum",
    },
    {
      label: "-",
      value: "sub",
    },
    {
      label: "*",
      value: "mult",
    },
    {
      label: "/",
      value: "div",
    },
  ];
  return (
    <Form {...formProps}>
      <form onSubmit={handleCalculate}>
        <div className="flex gap-[10px]">
          <Input
            type="number"
            placeholder="Numero 1"
            {...formProps.register("number1")}
          />
          <FormField
            control={formProps.control}
            name="operation"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="h-[46px]">
                      <SelectValue placeholder="+" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[10rem] overflow-y-auto">
                    {operations.map((operation) => (
                      <SelectItem key={operation.value} value={operation.value}>
                        {operation.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Input
            type="number"
            placeholder="Numero 2"
            {...formProps.register("number2")}
          />
        </div>
        <div className="flex justify-center mt-[52px]">
          <Button
            type="submit"
            className="px-[24px] py-[16px] h-[52px] font-[600] bg-blue-600 text-white mt-[40px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <span>Calcular</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
