import React from "react";
import PageHeader from '../components/PageHeader';
import { assinments } from "../data/data";
import AssignmentCard from "../components/AssignmentCard";

function Assignments() {
  return (
    <div className="main-wrap">
      <PageHeader
        align="center"
        pageTitle="Step into my assignments"
        headerText="That highlight my practical approach, clean code, and design-focused development."
      />

      <div className="assignments-group">
        <div className="container mx-auto max-w-7xl px-4 pt-4 pb-12">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {assinments.map((assignment) => (
              <div key={assignment.id}><AssignmentCard assignment={assignment} /></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
