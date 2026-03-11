import React from "react";
import SideNav from "../component/SideNav";
import {
  Bell,
  Book,
  Calendar,
  School,
  Search,
  Timer,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-white text-black">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Navigation */}
        <SideNav />

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Header */}
          <header className="flex h-16 items-center justify-between gap-4 border-b border-gray-200 bg-white px-6 lg:px-8">
            <div className="flex flex-1 items-center gap-4">
              <button className="text-gray-500 md:hidden hover:text-black">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <div className="relative w-full max-w-md hidden sm:block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <span className="material-symbols-outlined text-[20px]">
                    <Search />
                  </span>
                </span>
                <input
                  className="h-9 w-full rounded border border-gray-200 bg-white pl-10 pr-4 text-sm text-black placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Search courses, students, or teachers..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-black">
                <span className="absolute right-1.5 top-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                <span className="material-symbols-outlined">
                  <Bell />
                </span>
              </button>
              <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
                <span className="material-symbols-outlined text-[18px]">
                  <Calendar />
                </span>
                <span>Oct 24, 2023</span>
              </div>
            </div>
          </header>

          {/* Scrollable Content */}
          <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-white">
            <div className="mx-auto max-w-7xl space-y-8">
              {/* Welcome Section */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-black">
                    Dashboard Overview
                  </h2>
                  <p className="text-sm text-gray-600">
                    Welcome back, here's what's happening at your school today.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="inline-flex items-center justify-center gap-2 rounded bg-white px-4 py-2 text-sm font-medium text-black shadow-sm border border-gray-200 hover:bg-gray-50">
                    <span className="material-symbols-outlined text-[18px]">
                      download
                    </span>
                    Export Report
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                    Add New
                  </button>
                </div>
              </div>

              {/* Stat Cards Grid */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg shadow-blue-500/20">
                  <div className="absolute right-0 top-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                  <div className="relative flex flex-col gap-1">
                    <dt className="flex items-center gap-2 text-sm font-medium text-blue-100">
                      <span className="material-symbols-outlined text-[18px]">
                        <Book />
                      </span>
                      Total Courses
                    </dt>
                    <dd className="text-3xl font-bold">24</dd>
                    <div className="mt-2 flex items-center text-xs font-medium text-blue-100">
                      <span className="flex items-center rounded bg-white/20 px-1.5 py-0.5 text-white">
                        <span className="material-symbols-outlined mr-0.5 text-[14px]">
                          trending_up
                        </span>{" "}
                        12%
                      </span>
                      <span className="ml-2 opacity-80">from last month</span>
                    </div>
                  </div>
                </div>
                {/* Total Teachers (Green) */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 text-white shadow-lg shadow-emerald-500/20">
                  <div className="absolute right-0 top-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                  <div className="relative flex flex-col gap-1">
                    <dt className="flex items-center gap-2 text-sm font-medium text-emerald-100">
                      <span className="material-symbols-outlined text-[18px]">
                        <UserRound />
                      </span>
                      Total Teachers
                    </dt>
                    <dd className="text-3xl font-bold">45</dd>
                    <div className="mt-2 flex items-center text-xs font-medium text-emerald-100">
                      <span className="flex items-center rounded bg-white/20 px-1.5 py-0.5 text-white">
                        <span className="material-symbols-outlined mr-0.5 text-[14px]">
                          trending_up
                        </span>{" "}
                        5%
                      </span>
                      <span className="ml-2 opacity-80">from last month</span>
                    </div>
                  </div>
                </div>
                {/* Total Students (Cyan) */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 p-6 text-white shadow-lg shadow-cyan-500/20">
                  <div className="absolute right-0 top-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                  <div className="relative flex flex-col gap-1">
                    <dt className="flex items-center gap-2 text-sm font-medium text-cyan-100">
                      <span className="material-symbols-outlined text-[18px]">
                        <School />
                      </span>
                      Total Students
                    </dt>
                    <dd className="text-3xl font-bold">1,204</dd>
                    <div className="mt-2 flex items-center text-xs font-medium text-cyan-100">
                      <span className="flex items-center rounded bg-white/20 px-1.5 py-0.5 text-white">
                        <span className="material-symbols-outlined mr-0.5 text-[14px]">
                          trending_up
                        </span>
                        8%
                      </span>
                      <span className="ml-2 opacity-80">from last month</span>
                    </div>
                  </div>
                </div>
                {/* Active Classes (Amber) */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 p-6 text-white shadow-lg shadow-amber-500/20">
                  <div className="absolute right-0 top-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                  <div className="relative flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm font-medium text-amber-50">
                      <span className="material-symbols-outlined text-[18px]">
                        <Timer />
                      </span>
                      Active Classes
                    </div>
                    <dd className="text-3xl font-bold">12</dd>
                    <div className="mt-2 flex items-center text-xs font-medium text-amber-50">
                      <span className="flex items-center rounded bg-white/20 px-1.5 py-0.5 text-white">
                        <span className="material-symbols-outlined mr-0.5 text-[14px]">
                          trending_up
                        </span>{" "}
                        2%
                      </span>
                      <span className="ml-2 opacity-80">from last month</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick Actions & Tables */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-8">
                  {/* Quick Actions */}
                  <section>
                    <h3 className="mb-4 text-lg font-semibold text-black">
                      Quick Actions
                    </h3>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4"></div>
                  </section>

                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-black">
                        Recent Enrollments
                      </h3>
                      <NavLink
                        className="text-sm font-medium text-primary hover:text-primary/80"
                        href="#"
                      >
                        View All
                      </NavLink>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                      <table className="min-w-full divide-y divide-gray-200">
                        {/* Table content */}
                      </table>
                    </div>
                  </section>
                </div>

                {/* Right Column: Recent Activity */}
                <div className="space-y-8">
                  <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    {/* Recent Activity content */}
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
