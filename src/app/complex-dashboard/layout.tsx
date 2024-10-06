// import UserAnalytics from "@/components/UserAnalytics";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import Notifications from "@/components/Notifications";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {

  // Here conditionally rendering using parallel route
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      {/* <UserAnalytics />
      <RevenueMetrics />
      <Notifications /> */}
      <div
        style={{
          border: "1px solid grey",
        }}
      >
        {users}
      </div>
      <div
        style={{
          border: "1px solid grey",
        }}
      >
        {revenue}
      </div>
      <div
        style={{
          border: "1px solid grey",
        }}
      >
        {notifications}
      </div>
    </div>
  ) : (
    <div>{login}</div>
  );
}

// Now let say in our "/complex-dashboard" route we need to show 3 other component now traditionally we will be creating a seprate 3 component and show it inside the layout.tsx so they will persist but using parellel route we can acheive the same with benifits. Now we will create 3 placeholder slot, @notifications , @revenue and @users so that they will be directly available as a prop name "notifications", "revenue" and "users" to be used in this layout.tsx file.

// It is imp to keep a note that the "children" prop of layout.tsx file is also a slot which is a default slot equivalent to "/complex-dashboard/@children/page.tsx".

// Benifit of parallel routes is their ability to split a single layout into various slots, making the code more manageable. Each slot of layouut such as users or revenue can have its own loading, error states and have their own sub-navigation and routing. Each slot of our complex-dashboard can essentially function as a mini-application complete with its own navigation and state management.

// using parallel route we can also do conditional rendering that determine which slot to show. 
