import { Modal } from "../../../../components";
import { Button } from "../../../../components/Button";
import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Select } from "../../../../components/Select";
import { useNewAccountController } from "./useNewAccountModalController";

export function NewAccountModal() {
  const { closeNewAccountModal, isNewAccountModalOpen } =
    useNewAccountController();

  return (
    <Modal
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
      title="Nova conta"
    >
      <form>
        <div>
          <span className="text-gray-600 text-xs tracking-[-0.5px]">Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg tracking-[-0.5px]">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Nome da Conta" />

          <Select
            placeholder="Tipo"
            options={[
              { value: "CHECKING", label: "Conta Corrente" },
              { value: "INVESTMENT", label: "Investimentos" },
              { value: "CASH", label: "Dinheiro Físico" },
            ]}
          />

          <ColorsDropdownInput />
        </div>

        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
