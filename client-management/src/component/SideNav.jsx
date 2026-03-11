import React from "react";
import {
  BookCopy,
  CalendarDays,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Settings,
  UsersRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="flex h-screen overflow-hidden border-gray-200">
      <aside className="flex w-64 flex-col border-r border-border-color bg-white  transition-all duration-300 ease-in-out shrink-0 z-20 border-gray-300">
        <div className="flex h-16 items-center gap-3 px-6 border-b border-gray-200 ">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined text-xl">school</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold leading-none text-text-main mb-2">
              EduManage
            </h1>
            <div className="flex gap-2">
              <GraduationCap className="bg-blue-700 text-white " />
              <span className=" font-medium text-text-secondary dark:text-slate-400 mt-1 text-xs">
                Admin Portal
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between overflow-y-auto px-4 py-6">
          <nav className="flex flex-col gap-1">
            <NavLink
              to="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-secondary hover:bg-slate-50 hover:text-text-main dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                <LayoutDashboard />
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </NavLink>
            <NavLink
              to="/course"
              className="group flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary dark:bg-primary/20  dark:text-slate-400  dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px] font-medium">
                <BookCopy />
              </span>
              <span className="text-sm font-semibold">Courses</span>
            </NavLink>
            <NavLink
              to="/teacher"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-secondary hover:bg-slate-50 hover:text-text-main dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                <GraduationCap />
              </span>
              <div className="text-sm font-medium">Teachers</div>
            </NavLink>
            <NavLink
              to="/student"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-secondary hover:bg-slate-50 hover:text-text-main dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
              href=""
            >
              <span className="material-symbols-outlined text-[20px]">
                <UsersRound />
              </span>
              <span className="text-sm font-medium">Students</span>
            </NavLink>
          </nav>
          <div className="flex flex-col gap-1 pt-4 border-t border-border-color border-gray-200 mt-auto">
            <NavLink className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-secondary hover:bg-slate-50 hover:text-text-main dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                <Settings />
              </span>
              <span className="text-sm font-medium">Settings</span>
            </NavLink>
            <NavLink className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-secondary hover:bg-red-50 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                <LogOut />
              </span>
              <span className="text-sm font-medium">Logout</span>
            </NavLink>
          </div>
        </div>
        <div className="px-6 pb-6 pt-2">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
            <div
              className="h-9 w-9 rounded-full bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-600"
              data-alt="Profile picture of administrator"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClK4MMwezIjLhu0IWUmiAg5qR59HAc-aQW237Law7Zf9Lr2hMeFeJfADaex7QdDt4ziM1LOaDbVgp8vkoqgXUvQFbTgvzWp5IUooxhNrYL18WEBmY_Tbw0YJYC0DoRAXYPVIdSnVjM3Loc5t61R20LdnFZJK3h-K6k2iIXJ89sDpb4s_LR53brXZCsW2XWVhAfiKfizeVI0PHgEYf9vNpa8OFuBLSQmJN64HQ77Xd16umUw_1puTT5wbyJEjt8yFNjnbdhEfsF6ekI")',
              }}
            />
            <div className="overflow-hidden">
              <p className="truncate text-sm font-semibold text-text-main dark:text-white">
                Alex Morgan
              </p>
              <p className="truncate text-xs text-text-secondary dark:text-slate-400">
                alex@edumanage.com
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
