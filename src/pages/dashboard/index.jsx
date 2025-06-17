/* eslint-disable react-hooks/exhaustive-deps */
import Dashboard from '@/layouts/dashboard'
import setBanner from '@/pages/dashboard/store'
import React, { useEffect } from 'react'
import { Link } from 'react-router';

function DashboardPage() {
    const { list, fetchBanner } = setBanner();
    useEffect(()=> {
        fetchBanner()
    },[])
  return (
    <Dashboard>
        <div className="mt-10 bg-white border border-gray-200 rounded-xl">   
            <div className="flex flex-row items-center justify-between px-6 py-4">
                <h5 className="text-2xl font-semibold">Dashboard</h5>
                <Link to={""} className="font-medium text-white px-4 py-2 bg-blue-600 rounded-xl">Add Item</Link>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-y pt-4 border-slate-100">
                    <thead className="text-xs text-gray-700 uppercase bg-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Package Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Package Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Package Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Package Duration
                            </th>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {  list.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center py-6 text-gray-500">
                                    Data tidak ditemukan.
                                </td>
                            </tr>
                        ) : (
                            list.map((item, i) => (
                            <tr key={i} className="bg-slate-50">
                                <td className="px-6 py-4">{item.package_name || '-'}</td>
                                <td className="px-6 py-4">{item.package_description || '-'}</td>
                                <td className="px-6 py-4">{item.package_price}</td>
                                <td className="px-6 py-4">{item.package_duration}</td>
                                <td className="px-6 py-4">
                                <a href="#" className="text-blue-600 hover:underline">Edit</a>
                                </td>
                            </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    </Dashboard>
  )
}

export default DashboardPage