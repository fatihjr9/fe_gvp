/* eslint-disable react-hooks/exhaustive-deps */
import Modal from '@/components/modal';
import Dashboard from '@/layouts/dashboard'
import setBanner from '@/pages/dashboard/store'
import React, { useEffect, useState } from 'react'

function DashboardPage() {
    const { list, loading, fetchBanner, createBanner, editBanner, deleteBanner } = setBanner();
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');

    const resetForm = () => {
        setName('');
        setDescription('');
        setPrice('');
        setDuration('');
        setSelectedId(null);
    };
    

    const handleCreate = (e) => {
        e.preventDefault();
        const newPayload = {
          package_name: name,
          package_description: description,
          package_price: price,
          package_duration: duration,
        };
        createBanner(newPayload);
        setIsCreateModalOpen(false);
        resetForm();
    };

    const handleEdit = (e) => {
        e.preventDefault();
        const newPayload = {
            package_name: name,
            package_description: description,
            package_price: price,
            package_duration: duration,
        };
        editBanner(selectedId, newPayload);
        setIsEditModalOpen(false); // modal nutup setelah edit
    };          

    useEffect(()=> {
        fetchBanner()
    },[])
  return (
    <Dashboard>
        <div className="mt-10 bg-white border border-gray-200 rounded-xl">   
            <div className="flex flex-row items-center justify-between px-6 py-4">
                <h5 className="text-2xl font-semibold">Dashboard</h5>
                <button onClick={() => setIsCreateModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-xl">
                    Add item
                </button>
                <Modal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} title="Tambah Banner">
                    <form onSubmit={handleCreate} className="space-y-4">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="">Package Name</label>
                            <input type="text" placeholder="Nama Paket" value={name} onChange={(e) => setName(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="">Package Description</label>
                            <input type="text" placeholder="Nama Paket" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="">Package Price</label>
                            <input type="text" placeholder="Nama Paket" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="">Package Duration</label>
                            <input type="text" placeholder="Nama Paket" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded-xl">
                          Simpan
                        </button>
                    </form>
                </Modal>
            </div>
            <div className="relative overflow-x-auto">
                {loading && (
                    <div className="px-6 py-4 text-sm text-gray-500">Loading...</div>
                )}
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
                            list.map((item) => (
                            <tr key={item.id_banner_ads_package} className="bg-slate-50">
                                <td className="px-6 py-4">{item.package_name || '-'}</td>
                                <td className="px-6 py-4">{item.package_description || '-'}</td>
                                <td className="px-6 py-4">{item.package_price}</td>
                                <td className="px-6 py-4">{item.package_duration}</td>
                                <td className="px-6 py-4 flex flex-row items-center gap-x-2">
                                    <button onClick={() => setIsEditModalOpen(true)}>
                                        Edit
                                    </button>
                                    <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit Banner">
                                        <form onSubmit={handleEdit} className="space-y-4">
                                            <div className="flex flex-col space-y-1">
                                                <label htmlFor="">Package Name</label>
                                                <input type="text" placeholder="Nama Paket" value={name} onChange={(e) => setName(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
                                            </div>
                                            <div className="flex flex-col space-y-1">
                                                <label htmlFor="">Package Description</label>
                                                <input type="text" placeholder="Deskripsi Paket" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
                                            </div>
                                            <div className="flex flex-col space-y-1">
                                                <label htmlFor="">Package Price</label>
                                                <input type="text" placeholder="Harga Paket" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
                                            </div>
                                            <div className="flex flex-col space-y-1">
                                                <label htmlFor="">Package Duration</label>
                                                <input type="text" placeholder="Durasi Paket" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    setSelectedId(item.id_banner_ads_package);
                                                    setName(item.package_name);
                                                    setDescription(item.package_description);
                                                    setPrice(item.package_price);
                                                    setDuration(item.package_duration);
                                                    setIsEditModalOpen(true);
                                                }}
                                                >
                                                Edit
                                            </button>
                                        </form>
                                    </Modal>
                                    <button className="" onClick={() => deleteBanner(item.id_banner_ads_package)}>Delete</button>
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