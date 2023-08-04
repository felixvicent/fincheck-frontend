import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewTransactionController() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useDashboard();

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  };
}
