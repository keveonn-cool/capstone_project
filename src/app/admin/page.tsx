// pages/admin/page.tsx
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const AdminPage: React.FC = () => {
  const [courseForm, setCourseForm] = useState( {
    name: "",
    description : "",
    startDate: "",
    endDate: "",

  });
  


  return (
    <div>
      <Navbar />
      <h1>Admin Page</h1>

      {/* Create Course Form */}
    </div>
  );
};

export default AdminPage;
