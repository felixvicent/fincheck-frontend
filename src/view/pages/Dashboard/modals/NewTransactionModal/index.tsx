import { Modal } from "../../../../components";
import { Button } from "../../../../components/Button";
import { DatePickerInput } from "../../../../components/DatePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Select } from "../../../../components/Select";
import { useNewTransactionController } from "./useNewTransactionModalController";

export function NewTransactionModal() {
  const {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTransactionType,
  } = useNewTransactionController();

  const isExpense = newTransactionType === "EXPENSE";

  return (
    <Modal
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
      title={`Nova ${isExpense ? "Despesa" : "Receita"}`}
    >
      <form>
        <div>
          <span className="text-gray-600 text-xs tracking-[-0.5px]">
            Valor da {isExpense ? "Despesa" : "Receita"}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg tracking-[-0.5px]">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={`Nome da ${isExpense ? "Despesa" : "Receita"}`}
          />

          <Select
            placeholder="Categoria"
            options={[
              { value: "CHECKING", label: "Conta Corrente" },
              { value: "INVESTMENT", label: "Investimentos" },
              { value: "CASH", label: "Dinheiro Físico" },
            ]}
          />

          <Select
            placeholder={isExpense ? "Pagar com" : "Receber com"}
            options={[
              { value: "CHECKING", label: "Conta Corrente" },
              { value: "INVESTMENT", label: "Investimentos" },
              { value: "CASH", label: "Dinheiro Físico" },
            ]}
          />

          <DatePickerInput />
        </div>

        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
