import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";
          

export default function Homepage(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
            const data = {
                title,
                description,
                category,
            };
            Inertia.put(route("news.update", { id: props.myNews.id }), data);
            setTitle("");
            setDescription("");
            setCategory("");
        };
    return (
        <div className="min-h-screen bg-slate-50 text-2xl ">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="card bg-base-100 w-full lg:w-96 shadow-xl bg-white text-black m-2">
                <div className="card-body mb-2">
                <div className="p-4 text-2xl">Edit BERITA</div>
                    <input
                        type="text"
                        placeholder="Judul"
                        className="m-2 input input-bordered w-full  bg-white"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="m-2 input input-bordered w-full  bg-white"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        placeholder="Kategori"
                        className="m-2 input input-bordered w-full bg-white"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myNews.category}
                    />
                    <button
                        className="btn btn-primary m-2"
                        onClick={handleSubmit}
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
}
