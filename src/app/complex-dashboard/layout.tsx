import UserAnalytics from "@/components/UserAnalytics";
import RevenueMetrics from "@/components/RevenueMetrics";
import Notifications from "@/components/Notifications";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <UserAnalytics />
      <RevenueMetrics />
      <Notifications />
    </>
  );
}

// Now let say in our "/complex-dashboard" route we need to show 3 other component not traditionally we will be creating a seprate 3 component and show it inside the layout.tsx so they will persist but using parellel route we can acheive the same with benifits. 