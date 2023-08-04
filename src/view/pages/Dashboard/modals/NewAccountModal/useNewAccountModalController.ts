import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewAccountController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboard();

  return { isNewAccountModalOpen, closeNewAccountModal };
}
