import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
        {/* Sidebar */}
   
        {/* Main Content */}
        <main className="flex h-full flex-1 flex-col overflow-hidden relative">
          {/* Top Header Area */}
          <header className="flex h-auto flex-col gap-4 border-b border-border-color bg-white px-8 py-6 dark:bg-slate-900 dark:border-slate-800 shrink-0">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white">
                  Course Directory
                </h2>
                <p className="text-sm text-text-secondary dark:text-slate-400 mt-1">
                  Manage and oversee all curriculum courses, schedules, and
                  enrollments.
                </p>
              </div>
              <button className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all active:scale-[0.98] md:mt-0">
                <span className="material-symbols-outlined text-[20px]">
                  add
                </span>
                New Course
              </button>
            </div>
          </header>
          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
              {/* Filters and Search */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="relative w-full max-w-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="material-symbols-outlined text-slate-400 text-[20px]">
                      search
                    </span>
                  </div>
                  <input
                    className="block w-full rounded-lg border-0 py-2.5 pl-10 pr-3 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800 dark:ring-slate-700 dark:text-white"
                    placeholder="Search courses by name, code or description..."
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <div className="relative inline-block text-left">
                    <button
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="group inline-flex w-full items-center justify-center gap-x-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-text-main ring-1 ring-inset ring-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-700"
                      id="menu-button"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px] text-slate-500 group-hover:text-slate-700 dark:text-slate-400">
                        filter_list
                      </span>
                      Filter
                    </button>
                  </div>
                  <div className="relative inline-block text-left">
                    <button
                      className="group inline-flex w-full items-center justify-center gap-x-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-text-main ring-1 ring-inset ring-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-700"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px] text-slate-500 group-hover:text-slate-700 dark:text-slate-400">
                        sort
                      </span>
                      Sort
                    </button>
                  </div>
                </div>
              </div>
              {/* Table Container */}
              <div className="overflow-hidden rounded-xl border border-border-color bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border-color dark:divide-slate-800">
                    <thead className="bg-slate-50 dark:bg-slate-800/50">
                      <tr>
                        <th
                          className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-slate-400"
                          scope="col"
                        >
                          Course Name
                        </th>
                        <th
                          className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-slate-400 hidden md:table-cell"
                          scope="col"
                        >
                          Description
                        </th>
                        <th
                          className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-slate-400"
                          scope="col"
                        >
                          Teachers
                        </th>
                        <th
                          className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-slate-400"
                          scope="col"
                        >
                          Students
                        </th>
                        <th
                          className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-slate-400 hidden lg:table-cell"
                          scope="col"
                        >
                          Created Date
                        </th>
                        <th className="relative px-6 py-4" scope="col">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-color bg-white dark:bg-slate-900 dark:divide-slate-800">
                      {/* Row 1 */}
                      <tr className="group hover:bg-primary-light/50 transition-colors duration-150 dark:hover:bg-slate-800/50">
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded bg-blue-100 flex items-center justify-center text-primary font-bold text-sm dark:bg-blue-900/30 dark:text-blue-300">
                              CS101
                            </div>
                            <div className="ml-4">
                              <div className="font-semibold text-text-main dark:text-white group-hover:text-primary transition-colors">
                                Intro to Computer Science
                              </div>
                              <div className="text-xs text-text-secondary dark:text-slate-500">
                                Department of Engineering
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="max-w-xs truncate px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden md:table-cell">
                          Basics of algorithms, data structures, and programming
                          logic using Python.
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex -space-x-2 overflow-hidden">
                            <img
                              alt="Sarah J"
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                              data-alt="Portrait of a female teacher"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpjkVqEIt9cT9V5cTDxCXO7DJFQCIkZr_gxjBfhEm17ogxiwCX8mvux4X9wCE5Dl313_Lddk_VRLQXjD-lqB9kxjGhqPCORWv53zkC6NkLNVsJFanXleaPromIohCL0vH9KXbXl08Gmp163i5zcpaLVYfNmOq82x2v714uIPl9dtKzK8pfuGIAXOUcU67wkQ8jeWEHByjyOqaOgFgUTz95UHiz7acyqAZegMJ1lyLLIhtxib4X1KSkPGiU0qu-tusbrWattZyYyuk3"
                            />
                            <img
                              alt="Mike T"
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                              data-alt="Portrait of a male teacher"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-l07sZ6IU7vad9NxppdeVv105jfXJZ0UyBsBFFd_wcLBgsaOi79iIB4o6O-fr-xCIerYabUeG0dguDmWVQK9CPQjGcGvdb7suiXctdck92IHEt-p1TCYvNZYFvtowUwqMqetFI2hgcwARxi-mUD-h40GylGtpQyFhHVuat7SYN8tlWLYImDYry2LHB8ruAuvv28NOfvAChPijBeWHpDPz5Gqjoj_aWyEf15SsvJG7jKIW3MA15BBB23RslIGFd8pPxpUQwj9a6H1n"
                            />
                          </div>
                          <span className="text-xs text-text-secondary ml-1 dark:text-slate-500">
                            2 Teachers
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/20 dark:text-green-400 dark:ring-green-900/50">
                            45 Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden lg:table-cell">
                          Jan 12, 2024
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <button className="text-slate-400 hover:text-primary transition-colors dark:hover:text-white">
                            <span className="material-symbols-outlined">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="group hover:bg-primary-light/50 transition-colors duration-150 dark:hover:bg-slate-800/50">
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm dark:bg-purple-900/30 dark:text-purple-300">
                              MA202
                            </div>
                            <div className="ml-4">
                              <div className="font-semibold text-text-main dark:text-white group-hover:text-primary transition-colors">
                                Advanced Calculus II
                              </div>
                              <div className="text-xs text-text-secondary dark:text-slate-500">
                                Department of Mathematics
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="max-w-xs truncate px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden md:table-cell">
                          Differentiation and integration of vector-valued
                          functions.
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex -space-x-2 overflow-hidden">
                            <img
                              alt="Tom H"
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                              data-alt="Portrait of a male professor"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvCMNe4pIrfPAaMaPQ4eqY7b8MvfWfYaPt1nHc5Sg6VpO5gzoNlEcquLEwHn1xMKkiYX_41Gk919mlWKkCNG0_PfQWyegQmPG-Zbw2mYi720KxH0leqczX9yZC8KXO36vxdPrsVF_dizFfD9Frit3bUIdQ2VXci1ksd-ToJ0uQ5DhCU3o7UDqfKcsGZ1sMKv50YlCrab4_A08NHyOsRdE7XjC5lJqmKcureUBxUCrbDLeuYuYbf3TxE-avPgZIY0lz_xnQIoBIrGm2"
                            />
                          </div>
                          <span className="text-xs text-text-secondary ml-1 dark:text-slate-500">
                            1 Teacher
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700">
                            28 Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden lg:table-cell">
                          Dec 10, 2023
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <button className="text-slate-400 hover:text-primary transition-colors dark:hover:text-white">
                            <span className="material-symbols-outlined">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="group hover:bg-primary-light/50 transition-colors duration-150 dark:hover:bg-slate-800/50">
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm dark:bg-orange-900/30 dark:text-orange-300">
                              HI305
                            </div>
                            <div className="ml-4">
                              <div className="font-semibold text-text-main dark:text-white group-hover:text-primary transition-colors">
                                World History: 1900-Present
                              </div>
                              <div className="text-xs text-text-secondary dark:text-slate-500">
                                Department of Humanities
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="max-w-xs truncate px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden md:table-cell">
                          A comprehensive look at global events shaping the
                          modern world.
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex -space-x-2 overflow-hidden">
                            <img
                              alt="Lisa M"
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                              data-alt="Portrait of a female teacher"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFwbgMmATFe1TREnP-FAXW8BVTEaX_7WaU6Rfk3eshdpQT0JPaoRjn76cPtQVn99UVVxGNQsKTa33YVCXDUH-RN6pAiSolSrB0XHy5Et9GQjkdhqtf_DP8svjs_jIl3Wl4ChghmSQZuDCn6npRyHIwN4f4e0m2aAlEruVzTDQRMk9xyqXb3KbkCpfhIOmazEjWFIaxn1qD1h_MWj_okVMssZ3YLfHwuTf1PTarMGJeFIEhNG6iWl7TrmzB070215M3GbgyRZZz4ewh"
                            />
                            <img
                              alt="James L"
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                              data-alt="Portrait of a male teacher"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1LZ1AONRdbzwqKEo-mew5Zd8TTGuuPL0D0g5LOvXaoxGd1rlqn4DaY1Jl56bjrtr77tzUxbQqoqEtrs2K8liaaWfDzoAWz2CmWpS66QfjthPh1-Fg7HGk-FLyEQlMbZCGk_4Hi42nKdGiLHJ1oHsITSDBXYuACSSr30Fz-sX_a_fAGbTX352mKjdID05V8OWmnb2xkspC9XjXghTc9jAktZdi7proXeuZlc7297wdQ_Qc6PPDVAFMinnccXk8s7_hKoPdwPHctFzm"
                            />
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white text-xs font-medium text-slate-500 dark:bg-slate-800 dark:ring-slate-900 dark:text-slate-400">
                              +1
                            </div>
                          </div>
                          <span className="text-xs text-text-secondary ml-1 dark:text-slate-500">
                            3 Teachers
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 dark:bg-yellow-900/20 dark:text-yellow-400 dark:ring-yellow-900/50">
                            112 Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden lg:table-cell">
                          Feb 01, 2024
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <button className="text-slate-400 hover:text-primary transition-colors dark:hover:text-white">
                            <span className="material-symbols-outlined">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 4 */}
                      <tr className="group hover:bg-primary-light/50 transition-colors duration-150 dark:hover:bg-slate-800/50">
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm dark:bg-emerald-900/30 dark:text-emerald-300">
                              EN101
                            </div>
                            <div className="ml-4">
                              <div className="font-semibold text-text-main dark:text-white group-hover:text-primary transition-colors">
                                English Literature 101
                              </div>
                              <div className="text-xs text-text-secondary dark:text-slate-500">
                                Department of Arts
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="max-w-xs truncate px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden md:table-cell">
                          Critical analysis of classic western literature and
                          poetry.
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex -space-x-2 overflow-hidden">
                            <img
                              alt="Teacher"
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                              data-alt="Portrait of a female professor"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeUXezyQP0y-oPEyc7pXuE8beCpZZUVZKoRzQedT2_oRt8Q88tzynLdHCvzthUEc6ou2qh6cjSf8K1WRs2ib9RZlmKKNpWbpTabQj4xTTjlLywEbdS6VJj46X-zIy5lS4ZtOTDQ6ltDM8iOt3s5Cfl2386L2I3mqxnq0kmPluKHEB1e39sbWgJcUQg8sWM89CcnkBkHO5MwOStE9W_ArX4DTXYbu7iJwfuvVqMDf9xYqM4P5f84CuT2EIPrj2rf31CJScEPft97WXW"
                            />
                            <img
                              alt="Teacher"
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                              data-alt="Portrait of a male professor"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLA2wn5461MAUsFqeQ3vTXnxG0cwNPyxu3Smln-7wORp_bil84GA_l9W-SY-IDsErJRlee605CdXLfeIIAOr7XFC6qwFgHPPoUEene-u9KaNJ2a_bqrcd6DUn68KnUWM6vvLNKxrYW-DWzSVhywAEpgIM1jZNrElv6ct4s5vSLRHd7RD5VNY3carbCe_msnaV9awNXF-1Qal21EUNoxy0cWoy1PPa_XAsZhmX-pHu0EvwDi9UvHJxokN5B_0yhppeMme1oTisM_4au"
                            />
                          </div>
                          <span className="text-xs text-text-secondary ml-1 dark:text-slate-500">
                            2 Teachers
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/20 dark:text-green-400 dark:ring-green-900/50">
                            60 Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden lg:table-cell">
                          Jan 15, 2024
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <button className="text-slate-400 hover:text-primary transition-colors dark:hover:text-white">
                            <span className="material-symbols-outlined">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 5 */}
                      <tr className="group hover:bg-primary-light/50 transition-colors duration-150 dark:hover:bg-slate-800/50">
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm dark:bg-red-900/30 dark:text-red-300">
                              PH201
                            </div>
                            <div className="ml-4">
                              <div className="font-semibold text-text-main dark:text-white group-hover:text-primary transition-colors">
                                Physics: Mechanics
                              </div>
                              <div className="text-xs text-text-secondary dark:text-slate-500">
                                Department of Science
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="max-w-xs truncate px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden md:table-cell">
                          Newtonian physics and motion dynamics in real systems.
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex -space-x-2 overflow-hidden">
                            <img
                              alt="Dr. Physics"
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                              data-alt="Portrait of a male scientist teacher"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo3xpKWmKAmmfcFueL_W329vvENcTuk8jUxxvzZAmPHWYWtyMJoepSJ9d3nhP-17h_MJpXfy5bOnLF6zt1m02Sd2xA2qCAKilF2w5YGNJbmkCq4Vwz89dDrElBoLx1gxBauQsY2GxSf2GtVHb2KfxpUNSxiTwPRPFcVE_y-8R8j9ThQQ_ANepeP06NIc_tu3Z504s9jUuqoK09zQyJZdQrj6TDRGBAZK4-xj4LLJHQsvs3LGOQwhZTPXzYuGp1XXlZSrWUfXqwre1Z"
                            />
                          </div>
                          <span className="text-xs text-text-secondary ml-1 dark:text-slate-500">
                            1 Teacher
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700">
                            34 Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden lg:table-cell">
                          Jan 20, 2024
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <button className="text-slate-400 hover:text-primary transition-colors dark:hover:text-white">
                            <span className="material-symbols-outlined">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 6 */}
                      <tr className="group hover:bg-primary-light/50 transition-colors duration-150 dark:hover:bg-slate-800/50">
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm dark:bg-pink-900/30 dark:text-pink-300">
                              AR150
                            </div>
                            <div className="ml-4">
                              <div className="font-semibold text-text-main dark:text-white group-hover:text-primary transition-colors">
                                Art History
                              </div>
                              <div className="text-xs text-text-secondary dark:text-slate-500">
                                Department of Arts
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="max-w-xs truncate px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden md:table-cell">
                          Visual arts through the ages and cultural
                          significance.
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex -space-x-2 overflow-hidden">
                            <img
                              alt="Ms. Arts"
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                              data-alt="Portrait of a female art teacher"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnhtlCOWhwl24NoWRgLUs9gSkPxSlkespcAPcYuF3DFGgKNwpJ_0ty5KhhP5QVkE1wRw4nJyXHRHOfayAoWUsGGJuSUtARD1gwvAHdXZ7PDSDFgcNC58No7LV47MneTUqujfhZywtEwr4hTR7yFsj9OS8nHjzoc0PO983mieqDqL4WDAA84dH20p_yiqEWtgpOI25wxGnXd9TqTnYE6Zhtn-9M84o9InqBxV-d72BiIjQwRT2BdB3KKzOOqrqIZaTNWjjlxPk4Tk4R"
                            />
                          </div>
                          <span className="text-xs text-text-secondary ml-1 dark:text-slate-500">
                            1 Teacher
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 dark:bg-red-900/20 dark:text-red-400 dark:ring-red-900/50">
                            22 Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary dark:text-slate-400 hidden lg:table-cell">
                          Feb 05, 2024
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <button className="text-slate-400 hover:text-primary transition-colors dark:hover:text-white">
                            <span className="material-symbols-outlined">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className="flex items-center justify-between border-t border-border-color bg-white px-4 py-3 sm:px-6 dark:bg-slate-900 dark:border-slate-800">
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-text-secondary dark:text-slate-400">
                        Showing{" "}
                        <span className="font-medium text-text-main dark:text-white">
                          1
                        </span>{" "}
                        to{" "}
                        <span className="font-medium text-text-main dark:text-white">
                          6
                        </span>{" "}
                        of{" "}
                        <span className="font-medium text-text-main dark:text-white">
                          12
                        </span>{" "}
                        results
                      </p>
                    </div>
                    <div>
                      <nav
                        aria-label="Pagination"
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                      >
                        <a
                          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-slate-700 dark:hover:bg-slate-800"
                          href="#"
                        >
                          <span className="sr-only">Previous</span>
                          <span className="material-symbols-outlined text-sm">
                            chevron_left
                          </span>
                        </a>
                        <a
                          aria-current="page"
                          className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                          href="#"
                        >
                          1
                        </a>
                        <a
                          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-main ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-800"
                          href="#"
                        >
                          2
                        </a>
                        <a
                          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-slate-700 dark:hover:bg-slate-800"
                          href="#"
                        >
                          <span className="sr-only">Next</span>
                          <span className="material-symbols-outlined text-sm">
                            chevron_right
                          </span>
                        </a>
                      </nav>
                    </div>
                  </div>
                  {/* Mobile Pagination View */}
                  <div className="flex w-full justify-between sm:hidden">
                    <a
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700"
                      href="#"
                    >
                      Previous
                    </a>
                    <a
                      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700"
                      href="#"
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
